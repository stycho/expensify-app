import React from 'react';
import {
  Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Route render={({ location }) => (
      <div>

      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={250}>
          <Switch location={location}>
            <PublicRoute exact path="/" component={LoginPage} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route exact component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
    )} />
  </Router>
);

export default AppRouter;