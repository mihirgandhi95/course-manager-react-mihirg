import React from 'react';
import CourseList from "./CourseList";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CourseEditor from "./CourseEditor";
import ModuleEditor from "./ModuleEditor";
import LessonEditor from "./LessonEditor";
import TopicEditor from "./TopicEditor";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../src/style.css';

class CourseManager extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Course Manager</h1>

                    <Route path="/courses"
                           component={CourseList}>
                    </Route>

                    <Route exact path="/course/:courseId"
                           component={CourseEditor}>
                    </Route>


                    <Route exact path="/course/:courseId/module/:moduleId"
                           component={ModuleEditor}>
                    </Route>

                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId"
                           component={LessonEditor}>
                    </Route>


                    <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId"
                           component={TopicEditor}>
                    </Route>
                    {/*<Route path="/examples">*/}
                    {/*<div>*/}
                    {/*<div className="card-deck">*/}
                    {/*<CourseCard/>*/}
                    {/*<CourseCard/>*/}
                    {/*<CourseCard/>*/}
                    {/*<CourseCard/>*/}
                    {/*</div>*/}
                    {/*<CourseEditor/>*/}
                    {/*<br/>*/}
                    {/*<LessonTabs/>*/}
                    {/*<ModuleList/>*/}
                    {/*</div>*/}
                    {/*</Route>*/}
                </div>
            </Router>
        )
    }
}

export default CourseManager;