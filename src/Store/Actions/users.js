import { USERS,USERS_FAIL} from './ActionConstants'
import { db , auth} from '../../Firebase'
export function getCircles(){
return dispatch =>{
    let uid = auth.currentUser.uid;
    db.ref(`/users`).on('child_added').then(snap=>{
        let user = {
            uid,
            email:snap.val().email,
            circles:snap.val().circles || [],
        }
        dispatch(user(user));
    }).catch(err =>{
        dispatch(userFail(err))
    })
}
}
function user(user){
    return {
         type:USERS,
         payload:user
    }
}

function userFail(err){
    return {
         type:USERS_FAIL,
         payload:err
    }
}