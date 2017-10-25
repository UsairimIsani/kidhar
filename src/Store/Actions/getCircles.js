import { GOT_CIRCLE, GOT_CIRCLE_ERROR} from './ActionConstants'
import { db , auth} from '../../Firebase'
export function getCircles(){
return dispatch =>{
    let uid = auth.currentUser.uid;
    db.ref(`users/${uid}/circles/`).on('child_added').then(snap=>{
        console.log("Snap",snap)
        let circle = {
            key :snap.key,
            circle:snap.val().circle,
            type:snap.val().type,
            members:snap.val().members || []
        }
        dispatch(circle(circle));
    }).catch(err =>{
        dispatch(circleFail(err))
    })
}
}
function circle(circle){
    return {
         type:GOT_CIRCLE,
         payload:circle
    }
}

function circleFail(err){
    return {
         type:GOT_CIRCLE_ERROR,
         payload:err
    }
}