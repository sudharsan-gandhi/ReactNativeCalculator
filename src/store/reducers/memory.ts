import ACTIONS from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case ACTIONS.mem_insert: {
            
        }
        case ACTIONS.mem_remove: {

        }

        default: return state
    }
}