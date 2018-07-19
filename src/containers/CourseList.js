import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseService";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseCard from "../components/CourseCard";
import '../../src/style.css';
import $ from 'jquery';

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.titleChanged = this.titleChanged.bind(this);
        this.createCourse = this.createCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        this.searchCourse = this.searchCourse.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        this.findCourseByTitle = this.findCourseByTitle.bind(this);
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
       // alert("inside edit course")
      // alert( $("#editCourseTitle"+courseId).val())
        $("#editCourseTitle"+courseId).css("display","");
        $("#updateCourseTitle"+courseId).css("display","");

        // var newCourseName = $("#editCourseTitle"+courseId).val();
        //
        // alert(newCourseName);





    }


    updateCourse(courseId,courseTitle){
        var newCourseName = $("#editCourseTitle"+courseId).val();
        this.courseService.editCourseService(courseId,newCourseName).then(()=>{
            this.findAllCourses();
            $("#editCourseTitle"+courseId).css("display","none");
            $("#updateCourseTitle"+courseId).css("display","none");
        });

    }

    findCourseByTitle(courseTitle) {
        this.courseService
            .findCourseByTitle(courseTitle)
            .then((courses) => {this.setState({courses: courses})});
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


    renderCourseCard(){
        let courses = null;
        var self = this;

        if(this.state){
            courses = this.state.courses.map(
                function(course) {
                    return <CourseCard key={course.id} course={course} editCourse ={self.editCourse} updateCourse ={self.updateCourse}  deleteCourse={self.deleteCourse}/>
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

    searchCourse()
    {
        var key = this.refs.searchKey.value;
        this.courseService.findCourseByTitle(key).then((courses) => {this.setState({courses: courses})});


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
                        <th>
                            <input className="form-control"
                                   ref="searchKey"
                                   id="searchFld"
                                   placeholder="cs101"/>
                        </th>
                        <th>
                            <button
                                onClick={this.searchCourse}
                                className="btn btn-primary">
                                Search
                            </button>
                        </th>
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
                    {/*<tbody>*/}
                    {/*{this.renderCourseRows()}*/}
                    {/*</tbody>*/}
                </table>
            <div className="row">
                {this.renderCourseCard()}
                {/*<div className="card-deck row">*/}
                   {/**/}

                {/*</div>*/}
            </div>
            </div>
        )
    }
}

export default CourseList;