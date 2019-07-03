import ACTIONS from '../actions/types'

export default (state = '', action) => {
    switch (action.type) {
        case ACTIONS.Types.insert: {
            state = state + action.payload
            return state
        }
        case ACTIONS.Types.replace: {
            state = action.payload
            return state
        }
        case ACTIONS.Types.remove: {
            if(state != ''){
                state = state.substring(0, (state.length - 1))
            }
            return state
        }
        case ACTIONS.Types.removeAll: {
            return state
        }
        default: return state
    }
}