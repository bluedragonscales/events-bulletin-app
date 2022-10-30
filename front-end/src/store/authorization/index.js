// AUTHORIZATION MODULE
/* eslint-disable */
import {db, fireAuth} from '../../firebase.js';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';


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
    actions: {
        async signUp({commit}, payload) {
            try {
                const userCredentials = await createUserWithEmailAndPassword(
                    fireAuth,
                    payload.email,
                    payload.password
                );

            } catch(error) {
                console.log(error);
            }
        }
    }
}


export default authModule;