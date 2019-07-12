import { connect } from 'react-redux'
import ACTIONS from '../../store/actions/types'
import Memory from './Memory'

const mapStateToProps = state => ({
    memory: state
})


const mapDispatchToProps = (dispatch)=> ({ 
    mem_insert : (input) => {
        dispatch(ACTIONS.mem_insert(input))
    }, mem_remove : (input)=> {
        dispatch(ACTIONS.mem_remove(input))
    }, layout : (input) => {
        dispatch(ACTIONS.layout(input))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Memory);
