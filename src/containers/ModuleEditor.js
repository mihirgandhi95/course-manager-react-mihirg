
import React from 'react';
import LessonList from './LessonList';
import LessonTabs from './LessonTabs';
import ModuleList from './ModuleList';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../src/style.css';

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
            <div className="container-fluid">
                <br />
                {/*<h3>Editing Module {this.state.moduleId}</h3>*/}
                <div className="row">
                    <div className="col-4">
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                    <div className="col-8">
                        <LessonList moduleId={this.state.moduleId} courseId={this.state.courseId}/>
                    </div>
                </div>
            </div>

        );
    }
}