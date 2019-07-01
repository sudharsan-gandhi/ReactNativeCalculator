import ACTIONS from '../actions/types'

export default (state = '', action) => {
    switch (action.type) {
        case ACTIONS.insert: {
            
        }
        case ACTIONS.remove: {

        }
        case ACTIONS.removeAll: {

        }
        default: return state
    }
}