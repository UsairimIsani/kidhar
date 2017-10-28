import {
    Alert
} from "react-native";
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

        // console.log("params", {
        //     circle,
        //     member
        // })
        let uid = auth.currentUser.uid;
        let users = [];
        db.ref(`users/`).once('value', (res) => {
            // console.log("Users Response:", res.val())
            let users = res.val();
            let usersArray = []
            for (let user in users) {
                usersArray.push({
                    key: user,
                    user: users[user]
                })
            }
            // console.log("Users", usersArray)
            let userFound = usersArray.find((data) => {
                // console.log("Users", data)
                if(data.user){
                    return member.email == data.user.email.email;
                }
            });
            if (userFound) {
                db.ref(`/users/${uid}/circles`).once('value', (snap) => {
                    let circles = snap.val();
                    let circlesArray = [];
                    for (let circle in circles) {
                        circlesArray.push({
                            key: circle,
                            circle: circles[circle]
                        })
                    }
                    let circleFound = circlesArray.find((data) => {
                        // console.log(data)
                        return circle == data.circle.circle
                    })
                    // console.log("Circle Array", circlesArray);
                    // console.log("Circle found", circleFound);
                    if (userFound && circleFound) {
                        db.ref(`/users/${uid}/circles/${circleFound.key}/members/${userFound.key}`).update(userFound).then((circle) => {
                            // console.log("Added user in Circle", circle)
                        }).catch(err => console.log("Error while inviting", err))
                    } else {
                        Alert.alert(`No User with this email.${member.email}`)
                    }
                })
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