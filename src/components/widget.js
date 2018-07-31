import React from 'react'
import {connect} from 'react-redux'
import {DELETE_WIDGET,} from "../constants/index";
import * as actions from "../actions/index"
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

import $ from "jquery";

const Heading = ({widget, edit, preview, headingTextChanged, headingSizeChanged, headingNameChanged}) => {
    let selectElem
    let inputElem
    let nameElem
    return (

        <div>
            <div hidden={preview}>

                {/*<div hidden={edit}>*/}
                <h2> Heading {widget.size}</h2>
                <input onChange={() => headingTextChanged(widget.id, inputElem.value)}
                       value={widget.text}
                       ref={node => inputElem = node}
                />
                <select onChange={() => headingSizeChanged(widget.id, selectElem.value)}
                        value={widget.size}
                        ref={node => selectElem = node}>
                    <option value="1">Heading 1</option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                <br/>
                <p> Enter Name of the widget: </p>
                <input onChange={() => headingNameChanged(widget.id, nameElem.value)}
                       value={widget.name}
                       ref={node => nameElem = node}
                />
                <h3>Preview</h3>

                {/*</div>*/}
            </div>
            {widget.size == 1 && <h1> {widget.text}</h1>}
            {widget.size == 2 && <h2> {widget.text}</h2>}
            {widget.size == 3 && <h3> {widget.text}</h3>}
        </div>
    )
}

const Paragraph = ({widget,edit, preview, paragraphTextChanged, paragraphSizeChanged, paragraphNameChanged}) => {
    let selectElem
    let inputElem
    let nameElem

    return (
        <div>
            {/*<h2>Paragraph</h2>*/}
            {/*<textarea></textarea>*/}
            <div>
                <div hidden={preview}>

                    {/*<div hidden={edit}>*/}
                    <h2> Paragraph {widget.size}</h2>
                    <select onChange={() => paragraphSizeChanged(widget.id, selectElem.value)}
                            value={widget.size}
                            ref={node => selectElem = node}>
                        <option value="1">Paragraph 1</option>
                        <option value="2">Paragraph 2</option>
                        <option value="3">Paragraph 3</option>
                    </select>
                    <br/>
                    <textarea onChange={() => paragraphTextChanged(widget.id, inputElem.value)}
                              value={widget.text}
                              ref={node => inputElem = node}
                    />

                    <br/>
                    <p> Enter Name of the widget:
                        <input onChange={() => paragraphNameChanged(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                        /></p>
                    <h3>Preview</h3>

                    {/*</div>*/}

                </div>
                {widget.size == 1 && <h1> {widget.text}</h1>}
                {widget.size == 2 && <h2> {widget.text}</h2>}
                {widget.size == 3 && <h3> {widget.text}</h3>}
            </div>

        </div>
    )
}

const List = ({widget, preview, edit, listTextChanged, listTypeChanged, listNameChanged}) => {
    {/*<h2>List</h2>*/
    }

    let inputElem
    let nameElem
    let typeElem

    return (
        <div>

            <div>
                <div hidden={preview}>
                    {/*<div hidden={edit}>*/}
                    <h2> List {widget.size}</h2>
                    <textarea onChange={() => listTextChanged(widget.id, inputElem.value)}
                              value={widget.text}
                              ref={node => inputElem = node}
                    />
                    <br/>
                    <select onChange={() => listTypeChanged(widget.id, typeElem.value)}
                            value={widget.listType}
                            ref={node => typeElem = node}>
                        <option value="ordered">Ordered List</option>
                        <option value="unordered">Unordered List</option>
                    </select>
                    <br/>
                    <p> Enter Name of the widget:
                        <input onChange={() => listNameChanged(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                        /></p>
                    <h3>Preview</h3>
                    {/*</div>*/}

                </div>

                {widget.size == 2 && <h2> {widget.text}</h2>}
                <div style={{display: widget.listType === 'unordered' ? 'block' : 'none'}}>
                    <ul>
                        {widget.text && widget.text.split("\n").map(item =>
                            <li>{item}</li>
                        )
                        }
                    </ul>
                </div>

                <div style={{display: widget.listType === 'ordered' ? 'block' : 'none'}}>
                    <ol>
                    {widget.text && widget.text.split("\n").map(item=><li>{item}</li>)}
                    </ol>
                </div>

                </div>
        </div>
                )

                }


const Image = ({widget, edit, preview,searchChanged, imageURLChanged, imageNameChanged}) => {

    {/*<h2>Image</h2>*/}
    let inputElem
    let searchElem
    let nameElem
    return (
        <div>

            <div>
                <div hidden={preview}>
                    {/*<div hidden={edit}>*/}
                    <h2> Image </h2>
                    <input placeholder = "Image Link" onChange={() => imageURLChanged(widget.id, inputElem.value)}
                              value={widget.src}
                              ref={node => inputElem = node}
                    />
                    <br/>
                    <p> Enter Name of the widget:
                        <input onChange={() => imageNameChanged(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                        /></p>
                    <h3>Preview</h3>
                    {/*</div>*/}
                </div>

                {/*{widget.size == 2 && <h2> {widget.text}</h2>}*/}
                <div>
                    <img src={widget.src} alt="ImageDefault" width= "400" height="400"></img>
                </div>


             {/*   <form action="https://www.google.com/images" className="searchform" method="get" name="searchform" target="_blank">
                    <input name="sitesearch" type="hidden" value="google.com"/>
                        <input autoComplete="on" className="form-control search" name="q" placeholder="Search in google.com" required="required"  type="text"/>
                            <button className="button" type="submit">Search</button>
                </form>*/}
{/*
                   <input placeholder = "Image Link" onChange={() => searchChanged(widget.id, searchElem.value)}
                          value={widget.item}
                          ref={node => searchElem =node}
                   />*/}


            </div>
        </div>
    )


}

const Link = ({widget, edit,  preview, linkChanged, linkNameChanged}) => {

    {/*<h2>Image</h2>*/}
    let inputElem
    let nameElem
    return (
        <div>

            <div>
                <div hidden={preview}>
                    {/*<div hidden={edit}>*/}
                    <h2> Link</h2>
                    <input placeholder = "Link" onChange={() => linkChanged(widget.id, inputElem.value)}
                           value={widget.link}
                           ref={node => inputElem = node}
                    />
                    <br/>
                    <p> Enter Name of the widget:
                        <input onChange={() => linkNameChanged(widget.id, nameElem.value)}
                               value={widget.name}
                               ref={node => nameElem = node}
                        /></p>
                    <h3>Preview</h3>
                    {/*</div>*/}
                </div>

                {/*{widget.size == 2 && <h2> {widget.text}</h2>}*/}
                <div>
                    <a href={widget.link}>{widget.link}</a>
                </div>

            </div>
        </div>
    )


}







const Widget = ({widgets,edit, upArrow, downArrow, toggle, preview, widget, incrementPos, decrementPos,editWidget,  deleteWidget,selectWidgetType}) => {

    let widgetId
    let selectElement
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">


       {/*     () => {
            if(widget.edit == true){
            return !preview
        }
            else return preview;
        }*/}

       {/*     () => {if(widget.edit) {
            preview =!{preview}
        }
            else{
            preview = {preview}
        }
        }*/}

            <li>
                {/*<div hidden = {edit}>*/}
                <div hidden={preview}>
                    {/*<div hidden={edit}>*/}
                  {/*  <div hidden={toggle}>*/}
                    {widget.id} {widget.widgetType}

                    {/*   <input className="float-right" type="checkbox" data-toggle="toggle"/>
                                <label className="float-right"> Edit mode </label>
                      */}
                    <br/>
                    {/* hidden = {upArrow}*/}
                    {/*hidden={this.props.upArrowMode}*/}
                    {/*<div  className="upArrowButton">*/}
                    {widgets [0] !== widget && <button className="fa fa-arrow-up btn-warning" onClick = {()=> incrementPos(widget)}>
                    </button>
                    }
                    {/*</div>*/}

                    {/*hidden = {this.props.previewMode}*/}
                    {/*hidden={this.props.downArrowMode}*/}
                    {/*<div   className="downArrowButton">*/}
                    {widgets [widgets.length-1] !== widget && <button className="fa fa-arrow-down btn-warning" onClick = {
                        () => decrementPos(widget)}>
                    </button>
                    }
                    {/*</div>*/}

                    <br />
                    {/*  <select value={widget.widgetType} onChange={e => dispatch({
                    type: 'SELECT_WIDGET_TYPE',
                    id: widget.id,
                    widgetType: selectElement.value
                })
                } ref={node => selectElement = node}>*/}
                    <select value={widget.widgetType} onChange={e => selectWidgetType(widget.id,selectElement.value)}
                            ref={node => selectElement = node}>
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>List</option>
                        <option>Image</option>
                        <option>Link</option>
                    </select>
                    {/*<button className="float-right btn btn-danger" onClick={e => (
                    dispatch({
                        type: DELETE_WIDGET, id: widget.id
                    })
                )}>Delete
                </button>*/}



                    <button className="float-right btn btn-danger"   onClick={() =>
                        deleteWidget(widget.id) }> Delete </button>

                    {/*<button className="float-right btn btn-warning" onClick={() => edit(widget)}>
                        Edit
                    </button>*/}

                {/*</div>*/}
           {/*     </div>*/}
                </div>

               {/* edit = {this.props.editMode}*/}

                <div>
                    {widget.widgetType === 'Heading' && <HeadingContainer widget={widget} />}
                    {/*{widget.widgetType==='Paragraph'&& <Paragraph/>}*/}
                    {widget.widgetType === 'Paragraph' && <ParagraphContainer widget={widget}  />}
                    {widget.widgetType === 'Image' && <ImageContainer widget={widget} />}
                    {widget.widgetType === 'List' && <ListContainer widget={widget} />}
                    {widget.widgetType === 'Link' && <LinkContainer widget={widget} />}
                </div>
              {/*  </div>*/}
            </li>
        </div>
    )
}


/*function changeState(preview){
  return !preview;
}*/

const stateToPropsMapper = state => ({
                widgets: state.widgets,
                preview: state.preview,
              upArrowMode:state.upArrow,
                downArrowMode: state.downArrow,
               // editMode: state.edit,
                //edit: state.edit,


              /*  upArrow: state.upArrow,
                downArrow: state.downArrow,*/

             //   toggle: state.toggle
            })


const dispatchToPropsMapper = dispatch => ({

    headingTextChanged: (widgetId, newText) =>
        actions.headingTextChanged(dispatch, widgetId, newText),
    headingNameChanged: (widgetId, newName) =>
        actions.headingNameChanged(dispatch, widgetId, newName),
    headingSizeChanged: (widgetId, newSize) =>
        actions.headingSizeChanged(dispatch, widgetId, newSize),
    paragraphTextChanged: (widgetId, newText) =>
        actions.paragraphTextChanged(dispatch, widgetId, newText),
    paragraphNameChanged: (widgetId, newName) =>
        actions.paragraphNameChanged(dispatch, widgetId, newName),
    paragraphSizeChanged: (widgetId, newSize) =>
        actions.paragraphSizeChanged(dispatch, widgetId, newSize),
    listTextChanged: (widgetId, newText) =>
        actions.listTextChanged(dispatch, widgetId, newText),
    listNameChanged: (widgetId, newName) =>
        actions.listNameChanged(dispatch, widgetId, newName),
    listTypeChanged: (widgetId, newSize) =>
        actions.listTypeChanged(dispatch, widgetId, newSize),
    imageNameChanged: (widgetId, newName) =>
        actions.imageNameChanged(dispatch, widgetId, newName),
    imageURLChanged: (widgetId, newURL) =>
        actions.imageURLChanged(dispatch, widgetId, newURL),
    searchChanged: (widgetId, newItem) =>
        actions.searchChanged(dispatch, widgetId, newItem),
    linkNameChanged: (widgetId, newName) =>
        actions.linkNameChanged(dispatch, widgetId, newName),
    linkChanged: (widgetId, newURL) =>
        actions.linkChanged(dispatch, widgetId, newURL),
    incrementPos: (widget) => actions.incrementPos(dispatch, widget),
    decrementPos: (widget) => actions.decrementPos(dispatch, widget),
    deleteWidget: (widgetId) => actions.deleteWidget(dispatch,widgetId),
    selectWidgetType: (widgetId, widgetType)=> actions.selectWidgetType(dispatch, widgetId,widgetType),
    upArrow: () => actions.upArrow(dispatch),
    downArrow: () => actions.downArrow(dispatch),
   // edit: (widget) => actions.edit(dispatch,widget),
   // editWidget: (widgetId) => actions.editWidget(dispatch,widgetId),


})

                // const stateToPropsMapper = state => ({
    // })
const HeadingContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading)
const ParagraphContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph)
const ImageContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Image)
const ListContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(List)
const LinkContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Link)
const WidgetContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Widget)





export default WidgetContainer