const fbErrors = (code) => {

    let msg = 'Sorry, try again later.';

    switch(code) {
        case 'auth/user-not-found':
            msg = 'Sorry, this email is not registered.';
            break;
        case 'auth/email-already-in-use':
            msg = 'Sorry, this email has already been registered.';
            break;
        case 'auth/wrong-password':
            msg = 'Sorry, the email or password is incorrect.';
            break;
        default:
            msg = code;
            break;
    }

    return msg;
};



export default fbErrors;