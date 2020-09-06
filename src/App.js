import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import NoMatch from './components/NoMatch/NoMatch';
import Header from './components/Header/Header';


function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
         
          <Route path="/details/:id">
          <PostDetails></PostDetails>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;
