import {createStore, combineReducers, applyMiddleware} from 'redux';
import inputReducer from './reducers/input'
import memoryReducer from './reducers/memory'
import resultReducer from './reducers/result'
import layoutReducer from './reducers/layout'
import { devToolsEnhancer } from 'redux-devtools-extension';
import actionCreators from './actions/types'

const reducers = combineReducers({
    inputReducer,
    memoryReducer,
    resultReducer,
    layoutReducer   
})

const middleware = [];
const initial = undefined;

export default createStore(reducers, initial, devToolsEnhancer(
    { actionCreators, trace: true}
    // other store enhancers if any
  ))

