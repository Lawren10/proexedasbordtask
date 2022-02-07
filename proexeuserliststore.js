import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import displayReducer from './Displaystate/displayreducer'
import userReducer from './Userstate/Userreducer';


const allReducers = combineReducers({display:displayReducer, user:userReducer})
const proexeUserStore =  createStore(allReducers, applyMiddleware(thunk))


export default proexeUserStore;