import {CREATE_CIRCLE, CREATE_CIRCLE_ERROR, GOT_CIRCLE, GOT_CIRCLE_ERROR} from '../Actions/ActionConstants'
export let circlesReducer = (state = {}, action) => {
    switch (action.type) {
        case(GOT_CIRCLE):
            {
                // state.circle.circles ||
             
                return Object.assign({}, state, {circle: {
                        circles:action.payload

                    }})
            }

        case(GOT_CIRCLE_ERROR):
            {
                let err = action.payload
                return Object.assign({}, state, {circle: {
                        err

                    }})
            }

        default:
            return  Object.assign({}, state, {circle: {
                circles:[]
            }})
    }
}