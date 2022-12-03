// EVENTS MODULE
/* eslint-disable */
import {msgError, msgSuccess} from '../../tools/vuex.js';
import {db} from '../../firebase.js';
import router from '../../routes.js';
import {doc, setDoc, collection, query, orderBy, getDocs, deleteDoc, limit} from 'firebase/firestore';


let eventsCollection = collection(db, 'events');

const eventsModule = {
    namespaced: true,
    state() {
        return {
            currentEvents: '',
            userEvents: ''
        }
    },
    getters: {
        getAllEvents(state) {
            return state.currentEvents;
        },
        getUserEvents(state) {
            return state.yourEvents;
        }
    },
    mutations: {
        setCurrentEvents(state, events) {
            state.currentEvents = events;
        },
        setUserEvents(state, events) {
            state.yourEvents = events;
        }
    },
    actions: {
        async addEvent({commit, rootGetters}, payload) {
            try {
                const user = rootGetters['auth/getUserData'];
                const newEvent = doc(eventsCollection);

                await setDoc(newEvent, {
                    owner: {
                        owner: user.uid,
                        email: user.email,
                        firstname: user.firstname,
                        lastname: user.lastname
                    },
                    ...payload
                });

                router.push('/dashboard');
                msgSuccess(commit, "Your event has been added!");
            } catch(error) {
                msgError(commit, error);
            }
        },
        async loadAllEvents({commit}) {
            try {
                const q = query(eventsCollection, orderBy("time", "asc"));
                const querySnapshot = await getDocs(q);
                // console.log(querySnapshot.docs);

                const events = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                commit('setCurrentEvents', events);
                console.log(events);
            } catch(error) {
                msgError(commit, "Could not load the events.");
                console.log(error);
            }
        },
        async removeById({commit, state}, payload) {
            try {
                await deleteDoc(doc(db, "events", payload));

                const newList = state.currentEvents.filter( x => {
                    return x.id != payload;
                });

                commit("setCurrentEvents", newList);
                msgSuccess(commit,'Event deleted!');
            } catch(error) {
                msgError(commit, error);
            }
        },
        // async loadUserEvents({commit}, payload) {
        //     try {
        //         const q = query(eventsCollection, orderBy("time", "asc"), limit(payload.owner.email));
        //         const querySnapshot = await getDocs(q);

        //     } catch(error) {
        //         msgError(commit, error);
        //     }
        // }
    }
}


export default eventsModule;