import React from 'react';
import ReactDom from 'react-dom';
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";

const WithStore = () => {
    <Provider store={store}>
        <App /> 
    </Provider>
}

ReactDom.render(<WithStore /> , document.getElementById("root"));
