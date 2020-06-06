import React from 'react';
import { Route } from 'react-router-dom';

import Survey from "./component/SurveyForm.js";
import viewSurvey from "./component/viewsurvey.js";


import home from './component/home.js';

//import ArticleDetail from './containers/ArticleDetailView';

const BaseRouter = () => (
    <div>
        <Route exact path='/Dashboard' component={home}/>
       
       

        <Route exact path='/AddQuiz' component={Survey}/>
     
        <Route exact path='/ManageQuiz' component={viewSurvey}/>
    </div>

)

export default BaseRouter;