import React from 'react';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/navbar';
import HomePage from './components/HomePage';
import NewsPage from './components/NewsPage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
         <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/news" component={NewsPage}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/blog" component={BlogPage}></Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
