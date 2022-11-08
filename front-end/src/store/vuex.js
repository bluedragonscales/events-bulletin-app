// TOAST MESSAGE JAVASCRIPT

const msgError = (commit, msg = 'Failed!') => {
    return commit('notify/setToastMsg', {
        msg: msg,
        type: 'error'
    }, {root: true});
};



const msgSuccess = (commit, msg = 'Success!') => {
    return commit('notify/setToastMsg', {
        msg: msg,
        type: 'success'
    }, {root: true});
};


export {
    msgError,
    msgSuccess
};