import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <Router>
    <Route render={({ location }) => (
      <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={250}>
          <Switch location={location}>
            <Route exact path="/" component={ExpenseDashboardPage} />
            <Route exact path="/create" component={AddExpensePage} />
            <Route exact path="/edit/:id" component={EditExpensePage} />
            <Route exact path="/help" component={HelpPage} />
            <Route exact component={NotFoundPage} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
    )} />
  </Router>
);

export default AppRouter;