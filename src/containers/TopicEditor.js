import React,{Component} from 'react';
import {widgetReducer} from "../reducers/widgetReducer";
import {WidgetContainer} from "../components/widget";
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import App from "../containers/widgetList";
import $ from "jquery";
let store = createStore(widgetReducer)

export default class TopicEditor extends Component{




    componentDidMount(){
        var topicId = this.props.match.params.topicId;
        $(".evaluateTopicId").val(topicId);
    }




    render()
    {
        return(
            <div>
                <input className="evaluateTopicId" hidden/>
                <Provider store = {store}>
                    <App topicId={this.props.match.params.topicId} lessonId = {this.props.match.params.lessonId}
                         moduleId ={this.props.match.params.moduleId} courseId = {this.props.match.params.courseId} />
                </Provider>
            </div>
        )
    }
}