import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CreateCircle from './CreateCircle'
import {  createCircle} from '../Store/Actions/createCircle'
function mapStateToProps(state){
    return {

    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({createCircle},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateCircle)
