import  Circle  from "./Circle";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCircles} from '../Store/Actions/getCircles';
function mapStateToProps(state){
    return {
        circle :state.circle,
        user:state.user
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({getCircles},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Circle)