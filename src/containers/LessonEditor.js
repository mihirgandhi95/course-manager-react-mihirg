
import React from 'react';
import TopicList from './TopicList';
import ModuleList from './ModuleList'
import LessonList from './LessonList'
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
//import LessonTabs from './LessonTabs';
import '../../src/style.css';

export default class LessonEditor extends React.Component {

    constructor(props) {
        super(props);
        this.selectLesson = this.selectLesson.bind(this);
        this.state = {
            moduleId: this.props.match.params.moduleId,
            courseId: this.props.match.params.courseId,
            lessonId:''
        };

    }


    selectLesson(lessonId) {
        this.setState({lessonId: lessonId});
    }


    componentDidMount() {
        this.selectLesson
        (this.props.match.params.lessonId);
    }

    componentWillReceiveProps(newProps){
        this.selectLesson
        (newProps.match.params.lessonId);
    }


    render()
    {
        return(
            <div className="container-fluid">
                <br />
                {/*<h3>Editing Lesson {this.state.lessonId}</h3>*/}
                <div className="row">
                    <div className="col-4">
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                    <div className="col-8">
                        <LessonList moduleId={this.state.moduleId} courseId={this.state.courseId}/>

                        <TopicList lessonId={this.state.lessonId} moduleId={this.state.moduleId} courseId={this.state.courseId}/>
                    </div>
                </div>
            </div>

        );
    }
}