import Invite  from "./Invite";
import {    invite  } from "../Store/Actions/invite";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
function mapStateToProps(state){
    return {
        circle:state.circle
    }
}
function mapDispatchToProps(dispatch){
    return  bindActionCreators({invite},dispatch)

    }
export default connect(mapStateToProps,mapDispatchToProps)(Invite)