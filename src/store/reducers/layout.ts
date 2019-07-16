import ACTIONS from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.Types.layout: {
                return action.payload
            }
        default: return state
    }
}