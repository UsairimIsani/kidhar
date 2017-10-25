import { Alert } from "react-native";
import {
    INVITE,
    INVITE_FAIL
} from './ActionConstants'
import {
    db,
    auth
} from '../../Firebase'
export function invite({
    circle,
    member
}) {
    return dispatch => {

        let uid = auth.currentUser.uid;
        let users = [];
        db
            .ref(`/users`)
            .on('child_added')
            .then((res) => {
                users.concat({
                    key: res.key,
                    user: res.val()
                });
                let user = users.find((data) => {
                    return member.email == data.user.email;
                });
                let member = user.user
                if(user){
                    db
                        .ref(`users/${uid}/members/${user.key}`)
                        .set(
                            member
                        )
                        .then(res => dispatch(invited(res.val())));
                }else{
                    Alert.alert(`No User with this email.${member.email}`)
                }
            })

    }
}

function invited(member) {
    return {
        type: INVITE,
        payload: member
    }
}

function inviteFail(err) {
    return {
        type: INVITE_FAIL,
        payload: err
    }
}