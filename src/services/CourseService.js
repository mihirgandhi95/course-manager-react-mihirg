let _singleton = Symbol();


const COURSE_API_URL = 'http://localhost:8080/api/course';
const COURSE_API_URL_NEW = 'http://localhost:8080/api/course/CID';


// const COURSE_API_URL = 'https://cs5610-summer2-2018-mihirg.herokuapp.com/api/course';
// const COURSE_API_URL_NEW = 'https://cs5610-summer2-2018-mihirg.herokuapp.com/api/course/CID';

class CourseService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseService(_singleton);
        return this[_singleton]
    }

    findAllCourses() {
        return fetch(COURSE_API_URL)
            .then(function(response){
                return response.json();
            });
    }




    findCourseByTitle(courseTitle){
        if(!courseTitle){
            courseTitle = ""
        }
        return fetch(
            COURSE_API_URL_NEW
                .replace('CID', courseTitle))
            .then(function (response) {
                return response.json();
            });

    }

    deleteCourse(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId,
            {
                method: 'DELETE'
            })

    }



    editCourseService(courseId,courseTitle){
        return fetch(COURSE_API_URL+ '/' + courseId,
            {
                method: 'PUT',
                body: courseTitle,
                headers: {
                    'Content-Type': 'application/json'
                },

            })
    }


    createCourse(course) {
        return fetch(COURSE_API_URL, {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response) {
            return response.json();
        })}



}
export default CourseService;