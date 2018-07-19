import React from 'react';
import {Link} from 'react-router-dom';



export default class CourseCard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="col-3">
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                        <Link to={`/course/${this.props.course.id}`}>
                            {this.props.course.title}
                        </Link>
                    </h5>

                    <input className="form-control"   defaultValue={this.props.course.title} id={"editCourseTitle"+this.props.course.id} style={{display: "none"}}/>
                    <button className="btn btn-danger" onClick={() => this.props.deleteCourse(this.props.course.id)}>
                        Delete
                    </button>
                    <button className="btn btn-warning"  onClick={() => this.props.editCourse(this.props.course.id,this.props.course.title)}>
                        Edit
                    </button>
                    <button className="btn btn-success" id={"updateCourseTitle"+this.props.course.id} onClick={() => {this.props.updateCourse(this.props.course.id,this.props.course.title)}} style={{display: "none"}}>
                        Update
                    </button>

                </div>

            </div>
                <br />
            </div>

        )
    }
}