
// import {FIND_ALL_WIDGETS, DELETE_WIDGET, ADD_WIDGET, SAVE, HEADING_SIZE_CHANGED} from "../constants/index";

import * as constants from "../constants/index"
import $ from "jquery"


// const BASE_URL = 'http://localhost:8080/api/topic/TopicId/widget';

const BASE_URL = 'https://cs5610-summer2-2018-mihirg.herokuapp.com/api/topic/TopicId/widget';

const calc = 1000;
Array.prototype.move
    = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};


export const widgetReducer = (state = {widgets: [], preview: false}, action) =>
{
    let newState
    switch(action.type){




        case constants.HEADING_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.HEADING_TEXT_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.HEADING_SIZE_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.size = action.size
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.PARAGRAPH_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.PARAGRAPH_TEXT_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.PARAGRAPH_SIZE_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.size = action.size
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.LIST_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.LIST_TEXT_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.IMAGE_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.IMAGE_URL_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.src = action.src
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.LINK_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.link = action.link
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.LINK_URL_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.link = action.link
                    }
                    return Object.assign({},widget)
                })
            }

        case constants.SEARCH_CHANGED:



        case constants.LIST_TYPE_CHANGED:
            // alert('Heading Size Changed')
            return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.listType = action.listType
                    }
                    return Object.assign({},widget)
                })
            }


        case constants.PREVIEW:
           /* newState = Object.assign({}, state)
            newState.preview = !state.preview*/
            return {
                widgets: state.widgets,
                preview: !state.preview
            }

        case constants.EDIT:
            /* newState = Object.assign({}, state)
             newState.preview = !state.preview*/
            return {
                widgets: state.widgets.map(widget => {
                    if(widget.id == action.id){
                        alert('can edit the new widget with id:'+widget.id);
                    }
                }),
                    preview: !state.preview,
               // edit: !state.edit,
            }

 /*       case constants.UP_ARROW:
            let newState={
                widgets: state.widgets.filter((widget) => {
                    if(widget.widgetOrder === 1) {

                    }
                    return true;
                })
            }
            return JSON.parse(JSON.stringify(newState))
*/
/*

        case constants.DOWN_ARROW:

*/


     /*   case constants.TOGGLE:
            return {
                widgets: state.widgets,
                toggle: !state.toggle
            }
*/


        case constants.MOVE_UP:
            let widgets = state.widgets;
            var state = JSON.parse(JSON.stringify(state));

            //changing the number assigned to widgetOrder
            let index = widgets.indexOf(action.widget);
            let destination;
            let source = widgets[index].widgetOrder;
            if(index == 0) {
                alert('cannot move the widget up!! Choose another widget');
            }
            if(index!== 0) {
                destination = widgets[index - 1].widgetOrder;
                widgets[index - 1].widgetOrder = source;
                widgets[index].widgetOrder = destination;

                //actually interchanging the objects using splice
                widgets.move(index, index - 1);
                widgets = widgets.splice(0);
                state.widgets = widgets;
            }
            return state;



        case constants.MOVE_DOWN:
            widgets = state.widgets;
            var state = JSON.parse(JSON.stringify(state));

            //changing the number assigned to widgetOrder
            index = widgets.indexOf(action.widget);


            source = widgets[index].widgetOrder;

            if(index == widgets.length-1) {
                alert('cannot move widget down!, choose another widget!');
            }
            if(index !== widgets.length-1) {
                destination = widgets[index + 1].widgetOrder;
                widgets[index + 1].widgetOrder = source;
                widgets[index].widgetOrder = destination;

                //actually interchanging the objects using splice
                widgets.move(index - 1, index);
                widgets = widgets.splice(0);
                state.widgets = widgets;
            }
            return state;



        case constants.SELECT_WIDGET_TYPE:
            console.log(action);
            let newState={
                widgets: state.widgets.filter((widget) => {
                    if(widget.id === action.id) {
                        widget.widgetType = action.widgetType
                    }
                    return true;
                }),
                //preview:!state.preview
            }
            //return newState
            return JSON.parse(JSON.stringify(newState))



        case constants.SAVE:
            alert('saving to database!');

            let topicId = $(".evaluateTopicId").val();

            fetch(BASE_URL.replace("TopicId",topicId),{
                method: 'post',
                body: JSON.stringify(state.widgets),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(window.location.reload())
            return {
                widgets: state.widgets,
                preview: !state.preview
            }




            // fetch (BASE_WIDGET_URL.replace("TID",topicId).replace("CID",courseId).replace("MID",moduleId).replace("LID",lessonId)).then(
            //     response => (response.json())).then(
            //     widgets=>dispatch({
            //         type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
            //         widgets: widgets
            //     })
            // )

/*
                .then(function () {
                    newState = Object.assign({}, state)
                    newState.widgets = action.widgets;
                    return newState;
                })*/
            //return state;

            // newState={
            //     widgets: state.widgets.filter((widget) => {
            //         if(widget.id !== action.id) {
            //             widget.id = action.id
            //         }
            //         return true;
            //     })
            // }



            //return JSON.parse(JSON.stringify(state));
            // let newState = {
            //
            // }
            // this.setState({
            //     widgets: state.widgets.map(widget => {
            //         if(widget.id === action.id){
            //             widget.id = action.id
            //         }
            //         return Object.assign({},widget)
            // });

            /*return  {
                widgets: state.widgets.map(widget => {
                    if(widget.id === action.id){
                        widget.id = action.id
                    }
                    return Object.assign({},widget)
                })*/


            //return state;

            //return this.setState(this.state);


        case constants.FIND_ALL_WIDGETS:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets;
            return newState;
            return{
                widgets: action.widgets
            }

        case constants.FIND_ALL_WIDGETS_FOR_TOPIC:
            newState = Object.assign({}, state)
            newState.widgets = action.widgets;
            return newState;

        case constants.DELETE_WIDGET:
            //alert('deleting widget');
       /*     fetch("http://localhost:8080/api/widget/WID".replace("WID",action.id),
                {
                    method: 'DELETE',

                });*/

            return {
                widgets: state.widgets.filter(widget => (
                    widget.id !== action.id
                ))
            }


        case constants.ADD_WIDGET:
            // alert('adding widget')
            var orderCount= 0;
            state.widgets.map(widget => {
                if(orderCount<widget.widgetOrder){
                    orderCount = widget.widgetOrder;
                }
            })




            return {
                widgets: [
                    ...state.widgets,
                    {
                        id: state.widgets.length+calc+getTime(),
                        text: 'New Widget',
                        widgetType: 'Paragraph',
                        size: '2',
                        name: 'Widget Name',
                        listType: 'ordered',
                        src: '',
                        link: '',
                        widgetOrder: ++orderCount,
                        edit: true

                    },

                ],
               // preview: !state.preview,
            }

        default:

            return state;
    }
}