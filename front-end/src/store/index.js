import { createStore } from "vuex";
import Notifications from './notifications/index.js';
import Authorizations from './authorization/index.js';
import Events from './events/index.js';


const store = createStore({
    modules: {
        notify: Notifications,
        auth: Authorizations,
        events: Events
    }
});


export default store;