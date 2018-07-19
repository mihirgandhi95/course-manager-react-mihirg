


//const TOPIC_API_URL ='http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';
//const TOPIC_API_URL_DELETE= 'http://localhost:8080/api/topic';


const TOPIC_API_URL =
    'https://cs5610-summer2-2018-mihirg.herokuapp.com/api/course/CID/module/MID/lesson/LID/topic';
const TOPIC_API_URL_DELETE= 'https://cs5610-summer2-2018-mihirg.herokuapp.com/api/topic';

let _singleton = Symbol();
export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllTopicsForLesson(courseId,moduleId,lessonId) {
        if(!lessonId){
            lessonId = 0
        }
        if(!moduleId){
            moduleId = 0
        }
        return fetch(
            TOPIC_API_URL
                .replace('MID', moduleId).replace('CID',courseId).replace('LID',lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    createTopic(courseId, moduleId, lessonId,topic) {
        return fetch(TOPIC_API_URL
                .replace('MID', moduleId).replace('CID',courseId).replace('LID',lessonId),
            {
                body: JSON.stringify(topic),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }



    deleteTopic(topicId) {
        return fetch(TOPIC_API_URL_DELETE + '/' + topicId,
            {
                method: 'DELETE'
            })
    }



    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }
}