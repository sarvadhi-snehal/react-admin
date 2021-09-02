import {createStore, applyMiddleware} from 'redux'
import loginReducer from './reducer/loginReducer'
import{composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
const intialState = {

}
const middleware = [thunk]
const store = createStore(loginReducer,
                initialState,
                composeWithDevTools(applyMiddleware(...middleware)))

