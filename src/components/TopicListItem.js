import React from 'react';
import { Link } from 'react-router-dom';

export default class TopicListItem

    extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            module : this.props.module,
            topic : this.props.topic
        }
    }



    render() {
        return (
            <div>
            {/*<li className="list-group-item">*/}
                {/*<Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.state.topic.id}`}>*/}
                    {/*{this.state.topic.title}*/}
                {/*</Link>*/}
                {/*<span className="float-right">*/}
                {/*<i onClick={() => this.props.deleteTopic(this.props.topic.id)} className="fa fa-trash"></i>*/}
                {/*/!*<i className="fa fa-pencil">*!/*/}
                {/*/!*</i>*!/*/}
                {/*</span>*/}
            {/*</li>*/}



            <li className="nav-item">
                <a className="nav-link active"
                   href={`/course/${this.props.courseId}/module/
                   ${this.props.moduleId}/lesson/${this.props.lessonId}
                        /topic/${this.state.topic.id}`}>

                {this.state.topic.title}
                    <i onClick={() => this.props.deleteTopic(this.props.topic.id)} className="fa fa-trash"></i></a>

            </li>

        {/*<li className="nav-item"><a className="nav-link"*/}
        {/*href="#">Another Tab</a></li>*/}
        {/*</ul>*/}
            </div>
        );
    }
}
