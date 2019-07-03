import { connect } from 'react-redux'
import ACTIONS from '../../store/actions/types'
import Operators from './Operators'

const mapStateToProps = state => ({
    input: state
})


const mapDispatchToProps = (dispatch)=> ({ 
    insert : (input) => {
        dispatch(ACTIONS.insert(input))
    },replace : (input) => {
        dispatch(ACTIONS.replace(input))
    }, remove : (input)=> {
        dispatch(ACTIONS.remove())
    }, removeAll: (input) => {
        dispatch(ACTIONS.removeAll())
    } 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Operators);
