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
        }
    },
    mutations: {
        setToastMsg(state, payload) {
            state.toastMsg = [true, payload.msg, payload.type];
        }
    }
}


export default notificationsModule;