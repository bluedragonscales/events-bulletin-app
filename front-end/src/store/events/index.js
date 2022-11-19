// EVENTS MODULE
/* eslint-disable */
import {msgError, msgSuccess} from '../../tools/vuex.js';
import {db} from '../../firebase.js';
import router from '../../routes.js';
import {doc, setDoc, collection, query, limit, orderBy, startAfter, getDocs} from 'firebase/firestore';


let eventsCollection = collection(db, 'events');

const eventsModule = {
    namespaced: true,
    state() {
        return {
            currentEvents: '',
            yourEvents: ''
        }
    },
    getters: {
        getAllEvents(state) {
            return state.currentEvents;
        },
        getYourEvents(state) {
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

                const events = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                commit('setCurrentEvents', events);
                // console.log(events);
            } catch(error) {
                msgError(commit, "Could not load the events.");
                console.log(error);
            }
        },
        async loadUserEvents({commit, dispatch}, payload) {
            try {
                
            } catch(error) {
                msgError(commit, "Could not load your events.");
            }
        }
    }
}


export default eventsModule;