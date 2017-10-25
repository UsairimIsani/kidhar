import {
    auth,
    db
} from "../../Firebase";
import {
    SIGN_IN,
    SIGN_IN_ERROR,
    SIGN_UP,
    SIGN_UP_ERROR
} from './ActionConstants';
import { AsyncStorage } from "react-native";
export function signIn (user)  {
    return dispatch => {
        // auth
        //     .signInWithEmailAndPassword(user.email, user.password)
        //     .then(user => {
        //         console.log('====================================');
        //         console.log("Responser : ", user.email,'uid',user.uid);
        //         console.log('====================================');
                // AsyncStorage.setItem('currentUser',JSON.stringify(user))
                // navigator.geolocation.getCurrentPosition((position)=>{
                //     console.log('====================================');
                //     console.log("Position :",position);
                //     console.log('====================================');
                //     db.ref(auth.currentUser.uid).set({
                //         coords : position.coords
                //     }).then(res=>{
                //         console.log('====================================');
                //         console.log("Response on Sign iN",res);
                //         console.log('====================================');
                //     }).catch((err)=>{
                //         console.log('====================================');
                //         console.log("Response on Sign iN",res);
                //         console.log('====================================');

                //     })
                // },{timeout:10000,enableHighAccuracy:false})

                // dispatch(signInSucces(user));
            // }).catch(err => {
            //     dispatch(signInError(err))
            // })

    }

}

function signInSucces(user) {
    return {
        type: SIGN_IN,
        payload:user
    }
}
function signInError(err) {
    return {
        type: SIGN_IN_ERROR,
        payload:err
    }
}