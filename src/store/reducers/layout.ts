import ACTIONS from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.Types.layout: {
            let new_state = {...state}
            debugger;
            switch (action.layout) {
                case 'flex' : {
                    new_state = action
                }
                return new_state
            }
            return state
        }

        default: return state
    }
}