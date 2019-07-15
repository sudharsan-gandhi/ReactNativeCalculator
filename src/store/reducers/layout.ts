import ACTIONS from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.Types.layout: {
                return action.payload
            }
            return state

        default: return state
    }
}