import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from './containers/CourseManager';
import Hello from './components/Hello';
import Stateless from './components/Stateless';
import ModuleListItem from './components/ModuleListItem';
import ModuleList2 from './containers/ModuleList2';
// import App from './examples/App';
import HelloWorld from './hello';
import {widgetReducer} from "./reducers/widgetReducer";
import {WidgetContainer} from "./components/widget";
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import App from "./containers/widgetList";


let store = createStore(widgetReducer)

ReactDOM.render(
    <div className="container-fluid">
        <CourseManager/>
    </div>,
    document.getElementById('root')

);





/*
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
)*/
