import {
    auth,
    db
} from "../../Firebase";
import {
    SIGN_IN,
    SIGN_IN_ERROR,
    SIGN_UP,
    SIGN_UP_ERROR
} from './ActionConstants'
export function signUp  (user)  {
    return dispatch => {
        auth
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(res => {
                console.log('====================================');
                console.log("Responser : ", res);
                console.log('====================================');
                dispatch(signUpSucces(res))
            })
            .catch(err => {
                dispatch(signUpError(err))
            })

    }

}

function signUpSucces(user) {
    return {
        type: SIGN_UP,
        payload:user
    }
}
function signUpError(err) {
    return {
        type: SIGN_UP_ERROR,
        payload:err
    }
}