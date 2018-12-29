import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import News from './../News';
import DetailedNews from './../DetailedNews';
import routes from '../../routes';

const Main = () => (
  <React.Fragment>
    <Switch>
      <Redirect exact from='/' to='/news' component={News} />
      <Route exact path={`/${routes.news}`} component={News} />
      <Route path={`/${routes.news}/:id`} component={DetailedNews} />
    </Switch>
  </React.Fragment>
);

export default Main;