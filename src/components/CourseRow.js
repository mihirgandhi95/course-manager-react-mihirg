import React from 'react';
import { Link } from 'react-router-dom'






class CourseRow extends React.Component {

    constructor(props){
        super(props)
    }


    render() {
        return (
            <tr>
                <td>
                <Link to={`/course/${this.props.course.id}`}>
                    {this.props.course.title}
                </Link>
                </td>
                <td>
                    <button onClick={() => this.props.deleteCourse(this.props.course.id)}>
                        Delete
                    </button>
                    <button onClick={() => this.props.editCourse(this.props.course.id,this.props.course.title)}>
                        Edit
                    </button>
                </td>
            </tr>
        )
    }
}
export default CourseRow;
