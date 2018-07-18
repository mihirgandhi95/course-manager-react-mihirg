import React, {Component} from 'react'
import TopicListItem from '../components/TopicListItem';
import TopicService from '../services/TopicService'

export default class TopicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moduleId: '',
            lesson: { title: '' },
            lessons :[],
            lessonId:'',
            courseId: '',
            topic: {title: ''},
            topics:[]
        };
        this.createTopic = this.createTopic.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.setLessonId = this.setLessonId.bind(this);
        this.deleteTopic= this.deleteTopic.bind(this);
        this.topicService = TopicService.instance;
        this.setModuleId =this.setModuleId.bind(this);
    }

    setTopics(topics) {
        this.setState({topics: topics})
    }


    deleteTopic(topicId){
        this.topicService.deleteTopic(topicId)
            .then(()=> {this.findAllTopicsForLesson(this.props.courseId,this.state.moduleId,this.state.lessonId);});
    }




    findAllTopicsForLesson(courseId,moduleId,lessonId) {
        this.topicService.findAllTopicsForLesson(courseId,moduleId,lessonId).then((topics)=>{this.setTopics(topics)});
    }



    setModuleId(moduleId) {
        this.setState({moduleId: moduleId});
    }

    setLessonId(lessonId) {
        this.setState({lessonId: lessonId});
    }

    setCourseId(courseId){
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.setModuleId(this.state.moduleId);
        this.setCourseId(this.state.courseId);
        this.setLessonId(this.state.lessonId);

        this.findAllTopicsForLesson(this.props.courseId,this.state.moduleId,this.state.lessonId);
    }

    componentWillReceiveProps(newProps){
        this.setModuleId(newProps.moduleId);
        this.setCourseId(newProps.courseId);
        this.setLessonId(newProps.lessonId);
        this.findAllTopicsForLesson(newProps.courseId,newProps.moduleId,newProps.lessonId);
    }

    createTopic() {
        this.topicService
            .createTopic(this.props.courseId, this.props.moduleId, this.state.lessonId, this.state.topic).then(() =>{ this.findAllTopicsForLesson(this.props.courseId,this.state.moduleId,this.state.lessonId);});
    }


    titleChanged(event) {
        console.log(event.target.value);
        this.setState({topic: {title: event.target.value}});
    }

    renderListOfTopics() {


        var topic = null;
        var self = this;

        if (this.state) {
            topic = this.state.topics.map(function (topic) {
                return <TopicListItem  topic={topic}
                                       key={topic.id}
                                       courseId={self.state.courseId}
                                       moduleId={self.state.moduleId}
                                       lessonId={self.state.lessonId}
                                       deleteTopic={self.deleteTopic}
                />
            });
            return topic;
        }
    }


    render() {
        return (
            <div>
                <h3>Topic List for lesson: {this.state.lessonId}</h3>
                <input onChange={this.titleChanged}
                       value={this.state.topic.title}
                       placeholder="new Topic Title"
                       className="form-control"/>
                <button onClick={this.createTopic} className="btn btn-primary btn-block">
                    <i className="fa fa-plus"></i>
                </button>
                <br/>
                {/*<ul className="list-group">*/}
                <ul className="nav nav-tabs">
                    {this.renderListOfTopics()}
                </ul>
            </div>
        );
    }
}