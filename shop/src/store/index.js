import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

let reducer = (state={num:1,list:[]},action) => {
    switch (action.type) {
        case 'ADD':
            state.num++
            return {...state}
        case 'GET_LIST':
            state.list = action.list;
            return {...state,list:[...state.list]}
        default:
            return state
    }  
}

let store = createStore(reducer,applyMiddleware(thunk))

window.store = store;

export default store