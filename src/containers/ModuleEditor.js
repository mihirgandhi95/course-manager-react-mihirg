
import React from 'react';
import LessonList from './LessonList';
import LessonTabs from './LessonTabs';

export default class ModuleEditor extends React.Component {

    constructor(props) {
        super(props);
        this.selectModule = this.selectModule.bind(this);
        this.state = {
            moduleId: '',
            courseId: this.props.match.params.courseId

        };

    }


    selectModule(moduleId) {
        this.setState({moduleId: moduleId});
    }


    componentDidMount() {
        this.selectModule
        (this.props.match.params.moduleId);
    }

    componentWillReceiveProps(newProps){
        this.selectModule
        (newProps.match.params.moduleId);
    }


    render()
    {
        return(
            <div>
                <h3>Editing Module {this.state.moduleId}</h3>
                <div className="row">
                    <div className="col-4">
                        <LessonList moduleId={this.state.moduleId} courseId={this.state.courseId}/>
                    </div>
                </div>
            </div>

        );
    }
}