import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';
import List from './components/List';
import ManagerRewardList from './components/manager/List';
import ManagerRewardCreate from './components/manager/Create';
import ManagerRewardEdit from './components/manager/Edit';
import ManagerRewardShow from './components/manager/Show';


ReactDOM.render(
    <Router>
        <div>
        <Route exact path='/' component={App} />
        <Route path='/list' component={List} />
        <Route path='/edit/:id' component={Edit} />
        <Route path='/create' component={Create} />
        <Route path='/show/:id' component={Show} />
        <Route path='/managerreward/list' component={ManagerRewardList} />
        <Route path='/managerreward/edit/:id' component={ManagerRewardEdit} />
        <Route path='/managerreward/create' component={ManagerRewardCreate} />
        <Route path='/managerreward/show/:id' component={ManagerRewardShow} />
        </div>
    </Router>,
  document.getElementById('root')
);

