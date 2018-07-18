const LESSON_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson';
const LESSON_API_URL_DELETE= 'http://localhost:8080/api/lesson';

let _singleton = Symbol();
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllLessonsForModule(courseId,moduleId) {
        return fetch(
            LESSON_API_URL
                .replace('MID', moduleId).replace('CID',courseId))
            .then(function (response) {
                return response.json();
            })
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(LESSON_API_URL
            .replace('MID', moduleId).replace('CID',courseId),
            {
                body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }



    deleteLesson(lessonId) {
        return fetch(LESSON_API_URL_DELETE + '/' + lessonId,
            {
                method: 'DELETE'
            })
    }



    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }
}