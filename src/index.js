import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/my/my.css'
import 'antd-mobile/dist/antd-mobile.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Login from './components/login/Login.jsx';
import MyInfo from './components/my/MyInfo.jsx';
const BasicExample = () => (
    <Router>
      <div style={{"width":"100%","height":"100%"}}>
          <Route exact path="/" component={Login}/>
          <Route path="/login" component={Login}/>
          <Route path="/my/myInfo" component={MyInfo}/>
      </div>
    </Router>
);

ReactDOM.render(<BasicExample />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
