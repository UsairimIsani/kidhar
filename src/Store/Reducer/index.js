import { userReducer} from './userReducer';
import { circlesReducer} from './circlesReducer';
import { combineReducers } from 'redux'
export let rootReducer = combineReducers({
    user:userReducer,
    circle:circlesReducer

})