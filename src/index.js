import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import PageNotFound404 from './components/PageNotFound404';

// Router handling
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/search/:results" component={App}/>
      <Route component={PageNotFound404}/>
    </Switch>
  </Router>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
