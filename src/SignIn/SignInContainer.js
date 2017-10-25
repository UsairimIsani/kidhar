import SignIn  from "./SignIn";
import  {signIn }   from "../Store/Actions/signIn";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
function mapStateToProps(state){
    return {
        user:state.user
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({signIn},dispatch)

    
}
export default connect(mapStateToProps,mapDispatchToProps)(SignIn)