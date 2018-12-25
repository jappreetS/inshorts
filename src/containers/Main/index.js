import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import News from './../News';
import DetailedNews from './../DetailedNews';

const Main = ({ id }) => (
  <React.Fragment>
    <Switch>
      <Redirect exact from='/' to='/news' component={News} />
      <Route path='/news' component={News} />
      <Route path={`/${id}`} component={DetailedNews} />
    </Switch>
  </React.Fragment>
);

export default Main;