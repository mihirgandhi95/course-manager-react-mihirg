import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import CourseManager from './containers/CourseManager';
import Hello from './components/Hello';
import Stateless from './components/Stateless';
import ModuleListItem from './components/ModuleListItem';
import ModuleList2 from './containers/ModuleList2';
import App from './examples/App';
import HelloWorld from './hello';


ReactDOM.render(
    <div className="container-fluid">
        <CourseManager/>
    </div>,
    document.getElementById('root')

);
