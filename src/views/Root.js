import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <MainTemplate>
      <Router>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/articles" component={Articles} />
          <Route path="/twitters" component={Twitters} />
        </Switch>
      </Router>
    </MainTemplate>
  );
};

export default App;
