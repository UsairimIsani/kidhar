import { GOT_CIRCLE, GOT_CIRCLE_ERROR} from './ActionConstants'
import { db , auth} from '../../Firebase'
export function getCircles(){
return dispatch =>{
    let uid = auth.currentUser.uid;
    db.ref(`users/${uid}/circles/`).on('value',(snap)=>{
        // console.log("Circle Action :",snap.val())
        let circlesArray = [];
        for(let circleObj in snap.val()){
            let circle = {
                key :circleObj,
                circle:snap.val()[circleObj].circle,
                type:snap.val()[circleObj].type,
                members:snap.val()[circleObj].members || []
            }
           
            circlesArray.push(circle)
            
        }
        dispatch(circleGot(circlesArray));
       
    })
}
}
function circleGot(circle){
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