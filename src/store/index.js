import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
//  存储机制，可换localStorage, sessionStorage等，当前使用storage
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
 
const initState = 0
const middleware = [thunk]
 
const persistConfig = {
    key: 'root', // 必须有的
    storage: storage, // 缓存机制
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
const store = createStore(
    persistedReducer,
    initState,
    compose(
        applyMiddleware(...middleware)
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
 
export const persistor = persistStore(store)
 
export default store