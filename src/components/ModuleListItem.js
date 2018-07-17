import React from 'react';

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
                {this.state.module.title}
                <span className="float-right">
                <i className="fa fa-trash"></i>
                <i className="fa fa-pencil"></i>
                </span>
            </li>

        );
    }
}
