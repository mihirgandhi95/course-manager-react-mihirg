import React, {Component} from 'react'
import LessonListItem from '../components/LessonListItem';
import LessonService from '../services/LessonService'

export default class LessonList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleId: '',
            modules:[],
            lesson: { title: '' },
            lessons :[],
            courseId: ''
        };
        this.createLesson = this.createLesson.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.setModuleId = this.setModuleId.bind(this);
        this.deleteLesson= this.deleteLesson.bind(this);
        this.lessonService = LessonService.instance;
    }

    setLessons(lessons) {
        this.setState({lessons: lessons})
    }


    deleteLesson(lessonId){
        this.lessonService.deleteLesson(lessonId)
            .then(()=> {this.findAllLessonsForModule(this.props.courseId,this.state.moduleId);});
    }




    findAllLessonsForModule(courseId,moduleId) {
        this.lessonService.findAllLessonsForModule(courseId,moduleId).then((lessons)=>{this.setLessons(lessons)});
    }


    setCourseId(courseId){
        this.setState({courseId: courseId});
    }

    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    componentDidMount() {
        this.setModuleId(this.state.moduleId);
        this.setCourseId(this.state.courseId);

        this.findAllLessonsForModule(this.props.courseId,this.state.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.findAllLessonsForModule(newProps.courseId,newProps.moduleId);
    }

    createLesson() {
        this.lessonService
            .createLesson(this.props.courseId, this.props.moduleId, this.state.lesson).then(() =>{ this.findAllLessonsForModule(this.props.courseId,this.state.moduleId);});
    }


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({lesson: {title: event.target.value}});
    }

    renderListOfLessons() {


        var lessons
        var self = this;

        if (this.state) {
            lessons = this.state.lessons.map((lesson)=> {
                return <LessonListItem lesson={lesson}
                                       key={lesson.id}
                                       courseId={self.state.courseId}
                                       moduleId={self.state.moduleId}
                                       deleteLesson={self.deleteLesson}
                />
            });
            return lessons;
        }
    }


    render() {
        return (
            <div>
                <h3>Lesson List for  module: {this.state.moduleId}</h3>
                <input onChange={this.titleChanged}
                       value={this.state.lesson.title}
                       placeholder="new Lesson Title"
                       className="form-control"/>
                <button onClick={this.createLesson} className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
                <br/>
                {/*<ul className="list-group">*/}
                <ul className="nav nav-tabs">
                    {this.renderListOfLessons()}
                </ul>
               < br/>
            </div>
        );
    }
}