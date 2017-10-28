import { SIGN_IN,SIGN_IN_ERROR,SIGN_UP,SIGN_UP_ERROR, USERS } from '../Actions/ActionConstants'
export let userReducer = (state = {}, action) => {
    switch (action.type) {
        case(USERS):{
            let users = state.user.users.concat(action.payload)
            return Object.assign({}, state, {
                    user: {
                        users,
                    }
                })
        }
        case SIGN_IN:
            {
                // console.log('====================================');
                // console.log("State",state);
                // console.log('====================================');
                return Object.assign({}, state, {
                    user: {
                        currentUser: action.payload
                    }
                })
            }
        case SIGN_IN_ERROR:
            {
                return Object.assign({}, state, {
                    user: {err:action.payload}
                })
            }
        case SIGN_UP:
            {
                return Object.assign({}, state, {
                    user: {
                        currentUser: action.payload
                    }
                })
            }
        case SIGN_UP_ERROR:
            {
                return Object.assign({}, state, {
                    user: {err:action.payload}
                })
            }


        default:
            return state
    }
}