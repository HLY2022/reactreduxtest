import React, { Component } from "react";
import About from "./pages/About"; //About是路由组件
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store/index'
 
export default class App extends Component {
    render() {
        console.log('store', store)
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <About></About>
                </PersistGate>
            </Provider>
        );
    }
}