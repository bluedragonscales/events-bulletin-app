// AUTHORIZATION MODULE
/* eslint-disable */
import {db, fireAuth} from '../../firebase.js';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import {doc, setDoc, getDoc} from 'firebase/firestore';
import router from '../../routes';
import {msgError, msgSuccess} from '../../tools/vuex.js';
import fbErrors from '../../tools/fberrorcodes.js';


const DEFAULT_USER = {
    uid: null,
    firstname: null,
    lastname: null,
    email: null,
    birthdate: null,
    isAdmin: null
}

const authModule = {
    namespaced: true,
    state() {
        return {
            user: DEFAULT_USER,
            auth: false
        }
    },
    getters: {
        getAuthStatus(state) {
            if(state.auth) return true;
            else return false;
        },
        getAdminStatus(state) {
            if(state.user.isAdmin) return true;
            else return false;
        },
        getUserData(state) {
            return state.user;
        }
    },
    mutations: {
        setUser(state, payload) {
            state.user = {
                ...state.user,
                ...payload
            }
            // state.auth = true;
        },
        // setAuthStatus(state) {
        //     state.auth = !state.auth;
        // },
        clearUser(state) {
            state.user = DEFAULT_USER;
            state.auth = false;
        }
    },
    actions: {
        async signUp({commit}, payload) {
            try {
                commit('notify/setLoadingState', true, {root: true});

                const userCredentials = await createUserWithEmailAndPassword(
                    fireAuth,
                    payload.email,
                    payload.password
                );

                const newUser = {
                    uid: userCredentials.user.uid,
                    email: userCredentials.user.email,
                    isAdmin: false
                };
    
                await setDoc(doc(db, 'users', userCredentials.user.uid), newUser);
    
                commit('setUser', newUser);
                msgSuccess(commit, "Thanks! A verification request has been sent to your email.");

                if(newUser != null) {
                    router.push('/');
                    sendEmailVerification(userCredentials.user);
                }

            } catch(error) {
                msgError(commit, fbErrors(error.code));
                console.log(error);
            } finally {
                commit('notify/setLoadingState', false, {root: true});
            }
        },
        async getUserProfile({commit}, payload) {
            try {
                const docSnap = await getDoc(doc(db, 'users', payload));
                // console.log("HERE", docSnap.data());
                if(docSnap.exists()) {
                    console.log("HERE", docSnap.data());
                    return docSnap.data();
                } else {
                    return null;
                }
            } catch(error) {
                console.log(error);
                msgError(commit);
            }
        },
        async signIn({commit, dispatch, state}, payload) {
            try {
                commit('notify/setLoadingState', true, {root: true});


                const userCredentials = await signInWithEmailAndPassword(
                    fireAuth,
                    payload.email,
                    payload.password
                );
                console.log("USERCREDS", userCredentials);
                //console.log("USERCREDS", userCredentials.user.emailVerified);

                const userData = await dispatch('getUserProfile', userCredentials.user.uid);
                console.log("USERDATA", userData);

                if(userCredentials.user.emailVerified) {
                    // console.log("USERDATA2", userData);
                    commit('setUser', userData);
                    // commit('setAuthStatus');
                    state.auth = true;
                }

                // console.log("HERE", docSnap.data());

                router.push('/dashboard');

            } catch(error) {
                msgError(commit, fbErrors(error.code));
            } finally {
                commit('notify/setLoadingState', false, {root: true});
            }
        },
        async autoSignIn({commit, dispatch}, payload) {
            try {
                const userData = await dispatch('getUserProfile', payload.uid);
                console.log("AUTO", userData);
                commit('setUser', userData);
                return true;
            } catch(error) {
                msgError(commit, error.code);
            }
        },
        async signOut({commit}) {
            try {
                await fireAuth.signOut();
                msgSuccess(commit, 'Later, alligator!');
                commit('clearUser');
                // commit('setAuthStatus');
                router.push("/");
            } catch(error) {
                msgError(commit, error.code);
            }
        },
        async deleteAccount({commit}, payload) {
            try {
                const docSnap = await getDoc(doc(db, 'users', payload));
                
                if(docSnap.exists()) {
                    return docSnap.data();
                } else {
                    return null;
                }
            } catch(error) {
                console.log(error);
                msgError(commit);
            }
        }
    }
}


export default authModule;