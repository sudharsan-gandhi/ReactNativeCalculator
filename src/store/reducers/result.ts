import ACTIONS from '../actions/types'

export default (state = '', action) => {
    switch (action.type) {
        case ACTIONS.Types.set_result : {
            return action.payload
        }
        default: return state
    }
}