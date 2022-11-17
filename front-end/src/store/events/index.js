// EVENTS MODULE
/* eslint-disable */
import {msgError, msgSuccess} from '../../tools/vuex.js';
import {db} from '../../firebase.js';
import router from '../../routes.js';
import {doc, setDoc, collection} from 'firebase/firestore';


let eventsCollection = collection(db, 'events');

const eventsModule = {
    namespaced: true,
    state() {
        return {

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
        }
    }
}


export default eventsModule;