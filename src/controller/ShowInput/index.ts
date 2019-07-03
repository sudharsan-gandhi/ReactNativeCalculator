import { connect } from 'react-redux'
import ACTIONS from '../../store/actions/types'
import ShowInput from './ShowInput'

const mapStateToProps = state => ({
    show: state
})


const mapDispatchToProps = (dispatch)=> ({ 
    insert : (input) => {
        dispatch(ACTIONS.insert(input))
    }, remove : (input)=> {
        dispatch(ACTIONS.remove())
    }, removeAll: (input) => {
        dispatch(ACTIONS.removeAll())
    } 
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowInput);