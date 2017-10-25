import  SignUp  from "./SignUp";
import {  signUp } from "../Store/Actions/signUp";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
function mapStateToProps(state){
    return {
        user:state.user
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({signUp},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp) 