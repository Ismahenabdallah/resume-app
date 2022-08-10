import throttle from 'lodash.throttle';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Middleware from 'redux-thunk';
import Reducers from './reducers'
//const initialState = {}
function loadState(){
    try {
        const state= localStorage.getItem(' reducer ');
    if(state !== null ){
        return JSON.parse(state)
    }
    //JSON.parse tkou string ybadelhaaa  
    } catch (error) {
       console.error(error) 
    }
    
    return {
        reducer:{}
    }
}
function saveState(state ){
 console.log('saveState ...')
   localStorage.setItem(' reducer ',JSON.stringify(state)) 
//JSON.stringify ybadelhaaa string
}


const store = createStore(
    Reducers,
    loadState(),
    composeWithDevTools(applyMiddleware(Middleware))
)
store.subscribe(throttle(()=>{
    saveState(store.getState())
}),2000)

export default store;