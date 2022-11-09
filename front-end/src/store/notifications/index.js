// NOTIFICATIONS MODULE

const notificationsModule = {
    namespaced: true,
    state() {
        return {
            loader: false,
            toastMsg: [false, '', 'error']
        }
    },
    getters: {
        getToastMsg(state) {
            return state.toastMsg;
        },
        getLoadingState(state) {
            return state.loader;
        }
    },
    mutations: {
        setToastMsg(state, payload) {
            state.toastMsg = [true, payload.msg, payload.type];
        },
        setLoadingState(state, payload) {
            state.loader = payload;
        }
    }
}


export default notificationsModule;