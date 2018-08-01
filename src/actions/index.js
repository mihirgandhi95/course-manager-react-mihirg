// import {ADD_WIDGET,FIND_ALL_WIDGETS,HEADING_SIZE_CHANGED, DELETE_WIDGET,SAVE} from "../constants/index";

import * as constants from "../constants/index";
import {SELECT_WIDGET_TYPE} from "../constants/index";



// const BASE_WIDGET_URL = "http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic/TID/widget";
// const URL1 = "http://localhost:8080/api/widget/"

const URL1 = "https://cs5610-summer2-2018-mihirg.herokuapp.com/api/widget/"
const BASE_WIDGET_URL = "https://cs5610-summer2-2018-mihirg.herokuapp.com/api/course/CID/module/MID/lesson/LID/topic/TID/widget"
//


// {`/course/${this.props.courseId}/module/
//                    ${this.props.moduleId}/lesson/${this.props.lessonId}
//                         /topic/${this.state.topic.id}`}

    // /api/course/{courseId}/module/{moduleId}/lesson/{lessonId}/topic/{topicId}/widget

export const headingSizeChanged =(dispatch,widgetId, newSize) => dispatch(
    {
        type: constants.HEADING_SIZE_CHANGED, id:widgetId, size: newSize
    }
)

export const headingTextChanged =(dispatch,widgetId, newText) => dispatch(
    {
        type: constants.HEADING_TEXT_CHANGED, id:widgetId, text: newText
    }
)

export const headingNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.HEADING_NAME_CHANGED, id:widgetId, name: newName
    }
)

export const paragraphSizeChanged =(dispatch,widgetId, newSize) => dispatch(
    {
        type: constants.PARAGRAPH_SIZE_CHANGED, id:widgetId, size: newSize
    }
)

export const paragraphTextChanged =(dispatch,widgetId, newText) => dispatch(
    {
        type: constants.PARAGRAPH_TEXT_CHANGED, id:widgetId, text: newText
    }
)

export const paragraphNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.PARAGRAPH_NAME_CHANGED, id:widgetId, name: newName
    }
)

export const listTypeChanged =(dispatch,widgetId, newType) => dispatch(
    {
        type: constants.LIST_TYPE_CHANGED, id:widgetId, listType: newType
    }
)

export const listTextChanged =(dispatch,widgetId, newText) => dispatch(
    {
        type: constants.LIST_TEXT_CHANGED, id:widgetId, text: newText
    }
)

export const listNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.LIST_NAME_CHANGED, id:widgetId, name: newName
    }
)

export const imageURLChanged =(dispatch,widgetId, newURL) => dispatch(
    {
        type: constants.IMAGE_URL_CHANGED, id:widgetId, src: newURL
    }
)

export const imageNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.IMAGE_NAME_CHANGED, id:widgetId, name: newName
    }
)

export const linkChanged =(dispatch,widgetId, newLink) => dispatch(
    {
        type: constants.LINK_URL_CHANGED, id:widgetId, link: newLink
    }
)

export const searchChanged= (dispatch, widgetId, newItem) => dispatch(
    {
        type: constants.SEARCH_CHANGED,
        id: widgetId,
        items: newItem
    }
)


export const linkNameChanged =(dispatch,widgetId, newName) => dispatch(
    {
        type: constants.LINK_NAME_CHANGED, id:widgetId, name: newName
    }
)



export const incrementPos =(dispatch,widget) => dispatch(
    {
        type: constants.MOVE_UP, widget :widget
    }
)

export const decrementPos =(dispatch,widget) => dispatch(
    {
        type: constants.MOVE_DOWN, widget: widget
    }
)


export const selectWidgetType = (dispatch, widgetId, widgetType)=>  {
    dispatch({

        type: SELECT_WIDGET_TYPE,
        id:widgetId,
        widgetType: widgetType
    })
}

export const deleteWidget  = (dispatch,widgetId) =>
{
    return fetch(URL1+widgetId,
        {
            method: 'DELETE'
        }).then(widgets => dispatch({
        type: constants.DELETE_WIDGET,
        id: widgetId
        }))

}

export const findAllWidgetsForTopic = (dispatch,topicId,lessonId,moduleId, courseId) =>
{
    fetch (BASE_WIDGET_URL.replace("TID",topicId).replace("CID",courseId).replace("MID",moduleId).replace("LID",lessonId)).then(
        response => (response.json())).then(
        widgets=>dispatch({
            type: constants.FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets: widgets,

        })
    )
}

export const findAllWidgets = dispatch => {
    fetch(URL1)
        .then(response => (response.json()))
        .then(widgets=>dispatch({
            type: constants.FIND_ALL_WIDGETS,
            widgets: widgets
        }))
}

export const addWidget = (dispatch,widgets) => (

    dispatch(
        {
            type: constants.ADD_WIDGET,
            widgets: widgets
        }
        )
)

export const save = dispatch => (

    dispatch({
        type: constants.SAVE
    })

)



export const preview = dispatch => (
    dispatch({
        type: constants.PREVIEW
    })
)


export const edit = (dispatch,widget) => (
    dispatch({
        type: constants.EDIT,
        widget:widget
    })
)

export const editWidget  = (dispatch,widgetId) =>
{
   /* return fetch('http://localhost:8080/api/widget/'+widgetId,
        {
            method: 'DELETE'
        }).then(widgets => dispatch({
        type: constants.EDIT,
        id: widgetId
    }))*/
    dispatch({
        type: constants.EDIT,
        id: widgetId,
    })


}

export const upArrow = dispatch => {
    dispatch({
        type: constants.MOVE_UP
    })
}

export const downArrow = dispatch => {
    dispatch({
        type: constants.MOVE_DOWN
    })
}
/*

export const toggle = dispatch => (
    dispatch({
        type: constants.TOGGLE
    })
)
*/
