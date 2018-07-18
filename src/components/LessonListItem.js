import React from 'react';
import { Link } from 'react-router-dom';

export default class LessonListItem

    extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            module : this.props.module,
            lesson : this.props.lesson
        }
    }




    render() {
        return (
            <li className="nav-item">
                <a className="nav-link active"
                   href={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.state.lesson.id}`}>
                    {this.state.lesson.title}
                    <i onClick={() => this.props.deleteLesson(this.props.lesson.id)} className="fa fa-trash"></i></a>

            </li>
    );
    }
}
