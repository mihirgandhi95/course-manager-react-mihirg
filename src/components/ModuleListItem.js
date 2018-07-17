import React from 'react';
import { Link } from 'react-router-dom';

export default class ModuleListItem

    extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            module : this.props.module

        }
    }




    render() {
        return (
            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.state.module.id}`}>
                    {this.state.module.title}
                </Link>
                <span className="float-right">
                <i onClick={() => this.props.deleteModule(this.props.module.id)} className="fa fa-trash"></i>
                <i className="fa fa-pencil">

                </i>
                </span>
            </li>

        );
    }
}
