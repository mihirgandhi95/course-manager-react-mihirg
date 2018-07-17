import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";


class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }


    createCourse() {
        this.courseService
            .createCourse(this.state.course)
            .then(() => {
                this.findAllCourses();
            });
    }

    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId).then(() => {
                this.findAllCourses();
            }
        );
    }


    courseRows() {
        var rows = this.state.courses.map((course) => {
            return <CourseRow course={course} key={course.id}/>
        });
    }


    editCourse(courseId,courseTitle) {
        this.setState({
            course: {
                title: courseTitle
            }
        });
       /* this.courseService.editCourse(courseId).then(()=> {
            this.findAllCourses();
        });*/
    }

    componentDidMount() {
        this.findAllCourses();
    }

    findAllCourses() {
        this.courseService.findAllCourses()
            .then((courses) => {
                this.setState({courses: courses});
                console.log(courses);
            });
    }

    renderCourseRows() {
        let courses = null;
        var self = this;

        if (this.state) {
            courses = this.state.courses.map(
                function (course) {
                    return <CourseRow key={course.id} course={course} editCourse ={self.editCourse} deleteCourse={self.deleteCourse}/>
                }
            )
        }


        return (
            courses
        )
    }

    titleChanged(event) {
        console.log('titleChanged');
        this.setState({
            course: {title: event.target.value}
        });

    }


    render() {
        return (

            <div>
                <h2>Course List</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    <tr>
                        <th><input className="form-control"
                                   onChange={this.titleChanged}
                                   id="titleFld"
                                   placeholder="cs101"/></th>
                        <th>
                            <button
                                onClick={this.createCourse}
                                className="btn btn-primary">Add
                            </button>
                        </th>
                    </tr>

                    </thead>
                    <tbody>
                    {this.renderCourseRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseList;