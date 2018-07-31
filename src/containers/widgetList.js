import React,{Component} from 'react'
import {connect} from 'react-redux'
// import {save,findAllWidgets,addWidget} from "../actions/index";
import WidgetContainer from "../components/widget";
import * as actions from "../actions"
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import TopicListItem from "../components/TopicListItem";
import $ from "jquery";

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
                <br/>
                <h3> Widget List for Topic {this.props.topicId} Length:{this.props.widgets.length} </h3>
                {/*<button className= "float-right btn btn-success" hidden = {this.props.previewMode} onClick={this.props.save}>
                    Save
                </button>*/}
                {/*<div hidden = {this.props.editMode}>*/}
               {/* hidden = {this.props.previewMode}*/}
                <button className= "float-right btn btn-success"   onClick= {this.props.save}>
                    Save
                 {/*   <TopicListItem />*/}
                </button>

              {/*  <button className="btn btn-danger float-right"  onClick={this.props.toggle}>
                    Toggle
                </button>
*/}

                {/*<input type="button" id="primaryButton" onclick="ExistingLogic()" />*/}

                {/*<input className="evaluateTopicId" hidden/>*/}
                {/*<input type="button" id="secondaryButton" hidden/>*/}

                {/*$('#secondaryButton').click(function(){*/}
                {/*$("#primaryButton").click()*/}
            {/*})*/}
               {/* hidden ={ this.props.editMode}*/}

                <button className="float-right btn btn-warning"  hidden ={this.props.previewMode}  onClick={this.props.preview}>
                    Preview
                </button>

                <button className="float-right btn btn-warning"  hidden={!(this.props.previewMode)} onClick={this.props.preview}>
                    Edit
                </button>
                {/*</div>*/}
              {/*  <button className="float-right btn btn-primary" onClick={this.props.edit}>
                    Edit
                </button>*/}

                <br/>
                <br/>


                <ul>
                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                        // toggle = {this.props.toggleMode}
                                       //  widgets = {widgets}
                                         //edit = {this.props.editMode}
                                         preview = {this.props.previewMode}
                                         key={widget.id} />
                    ))}
                </ul>

                {/*Importing jquery -ui  does not work to make the widgets draggable . Not as easy as in simple jQuery. react requires
                 a lot more environment setup. decided not to do it. */}
                {/*$(function() =>  {*/}
                {/*$("WidgetContainer").sortable()*/}
                 {/*});*/}


                <button className="float-right btn btn-success" onClick={this.props.addWidget}>Add Widget</button>

            </div>
                <br/>
                <br/>

                {/*<form method="get" action="http://www.google.com/search">*/}

                    {/*<div>
                        <table border="0" align="center" cellPadding="0">
                            <tbody>
                            <tr>
                                <td>
                                <input type="text"   name="q" size="25"
                                       maxLength="255" value="" />
                                <input type="submit" value="Google Search" />
                                </td>
                            </tr>
                            <tr><td align="center">
                                <input type="radio"  name="sitesearch" value="" />The Web
                                <input type="radio"  name="sitesearch"
                                       value="mihirgandhi.com" checked /> Only Your Site<br />
                            </td></tr>
                            </tbody>
                        </table>
                    </div>*/}
{/*
                </form>*/}

                <div>

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
        previewMode: state.preview,
       // editMode: state.edit,

      //  toggleMode: state.toggle
    }
)



const dispatcherToPropsMapper = dispatch => (
    {
       /* findAllWidgets: () => actions.findAllWidgets(dispatch),*/
        findAllWidgetsForTopic: (topicId,lessonId,moduleId,courseId) => actions.findAllWidgetsForTopic(dispatch, topicId,lessonId,moduleId,courseId),
        addWidget: (widgets) => actions.addWidget(dispatch,widgets),
        save: () => actions.save(dispatch),
        preview: () => actions.preview(dispatch),
       // edit: () => actions.edit(dispatch),

     //   toggle: () => actions.toggle(dispatch)

    }
)


const App = connect(stateToPropertiesMapper,dispatcherToPropsMapper) (WidgetList)

export default App;