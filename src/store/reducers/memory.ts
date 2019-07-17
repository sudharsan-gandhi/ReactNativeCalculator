import ACTIONS from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case ACTIONS.Types.mem_insert: {
            if(!state.includes(action.payload) && state.length < 5)
                return [...state, action.payload]
        }
        case ACTIONS.Types.mem_remove: {
            let new_state = [...state]
            let index = new_state.indexOf(action.payload)
            if(index >= 0) {
                new_state.splice(index,1)
            }
            return new_state
        }

        default: return state
    }
}