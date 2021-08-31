import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';


function App() {
  return (
    <div >
  
     
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/team/:idTeam">
            <TeamDetails></TeamDetails>
            
          </Route>
          <Route path="/dashboard">
           
          </Route>
        </Switch>
    
    </Router>
     
    </div>
  );
}

export default App;
