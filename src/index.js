import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootswatch/dist/pulse/bootstrap.min.css';
import './components/themes/Custom.css';
import App from './App';
import './App.css';
import ManagerRewardList from './components/manager/List';
import ManagerRewardCreate from './components/manager/Create';
import ManagerRewardEdit from './components/manager/Edit';
import ManagerRewardShow from './components/manager/Show';
import ManagerRewardInactive from './components/manager/template/CloseReward';


ReactDOM.render(
    <Router>
        <div>
        <Route exact path='/' component={App} />
        <Route path='/managerreward/list' component={ManagerRewardList} />
        <Route path='/managerreward/edit/:id' component={ManagerRewardEdit} />
        <Route path='/managerreward/create' component={ManagerRewardCreate} />
        <Route path='/managerreward/show/:id' component={ManagerRewardShow} />
        <Route path='/managerreward/inactive/:id' component={ManagerRewardInactive} />
        </div>
    </Router>,
  document.getElementById('root')
);

