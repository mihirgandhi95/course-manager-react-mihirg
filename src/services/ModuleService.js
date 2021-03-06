


// const MODULE_API_URL ='http://localhost:8080/api/course/CID/module';
// const MODULE_API_URL_DELETE = 'http://localhost:8080/api/module';
//
const MODULE_API_URL = 'https://cs5610-summer2-2018-mihirg.herokuapp.com/api/course/CID/module';
const MODULE_API_URL_DELETE = 'https://cs5610-summer2-2018-mihirg.herokuapp.com/api/module';

let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }


    findAllModules(){
        return fetch(MODULE_API_URL_DELETE).then(function (response){
            return response.json();
        });
    }


    findAllModulesForCourse(courseId) {

        if(!courseId){
            courseId = 0
        }
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }



    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    deleteModule(moduleId) {
        return fetch(MODULE_API_URL_DELETE + '/' + moduleId,
            {
                method: 'DELETE'
            })
    }

}

