import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {save,findAllWidgets,addWidget} from "../actions/index";
import WidgetContainer from "../components/widget";
import * as actions from "../actions"
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import TopicListItem from "../components/TopicListItem";

class WidgetList extends Component {
    constructor(props){
        super(props);
        var topicId = this.props.topicId;
        var lessonId = this.props.lessonId;
        var moduleId = this.props.moduleId;
        var courseId = this.props.courseId;
        this.props.findAllWidgetsForTopic(topicId,lessonId,moduleId,courseId);
        //widgets = this.props.widgets;
        // this.props.findAllWidgets();
        //console.log(this.props.topicId);
    }



    render(){
        return(
            <div className="row">
            <div className="col-4">
            </div>
            <div className="col-8">
            <div>
                <h1> Widget List {this.props.widgets.length} </h1>
                {/*<button className= "float-right btn btn-success" hidden = {this.props.previewMode} onClick={this.props.save}>
                    Save
                </button>*/}

                <button className= "float-right btn btn-success" hidden = {this.props.previewMode} onClick= {this.props.save}>
                    Save
                 {/*   <TopicListItem />*/}
                </button>


                {/*<input type="button" id="primaryButton" onclick="ExistingLogic()" />*/}

                {/*<input className="evaluateTopicId" hidden/>*/}
                {/*<input type="button" id="secondaryButton" hidden/>*/}

                {/*$('#secondaryButton').click(function(){*/}
                {/*$("#primaryButton").click()*/}
            {/*})*/}

                <button className="float-right btn btn-warning" onClick={this.props.preview}>
                    Preview
                </button>
                <br/>
                <br/>


                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}

                                       //  widgets = {widgets}
                                         preview = {this.props.previewMode}
                                         key={widget.id} />
                    ))}
                </ul>

                <button className="float-right btn btn-success" onClick={this.props.addWidget}>Add Widget</button>

            </div>
            </div>
            </div>
        )
    }

}

// function callTwo() {
//     this.props.save;
//     this.props.findAllWidgets;
// }


const stateToPropertiesMapper = (state) => (
    {
        widgets: state.widgets,
        previewMode: state.preview
    }
)



const dispatcherToPropsMapper = dispatch => (
    {
       /* findAllWidgets: () => actions.findAllWidgets(dispatch),*/
        findAllWidgetsForTopic: (topicId,lessonId,moduleId,courseId) => actions.findAllWidgetsForTopic(dispatch, topicId,lessonId,moduleId,courseId),
        addWidget: () => actions.addWidget(dispatch),
        save: () => actions.save(dispatch),
        preview: () => actions.preview(dispatch)

    }
)


const App = connect(stateToPropertiesMapper,dispatcherToPropsMapper) (WidgetList)

export default App;