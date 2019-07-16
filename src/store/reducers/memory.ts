import ACTIONS from '../actions/types'

export default (state = [], action) => {
    debugger
    switch (action.type) {
        case ACTIONS.Types.mem_insert: {
            if(!state.includes(action.payload))
                return [...state, action.payload]
        }
        case ACTIONS.mem_remove: {

        }

        default: return state
    }
}