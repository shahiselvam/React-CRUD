import React from 'react'; 
import './App.css';
import {BrowserRouter , Route , Switch ,Redirect} from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import createUser from './CreateUser'
import viewuser from './ViewUser';
import profile from './profile';

function App() {
  return (
    <>
 <BrowserRouter>   
  <Switch>

  <Route path="/home" component={Home} />
  <Route path="/Dashboard" component={Dashboard} />
  <Route path="/createUser" component={createUser} />
  <Route path="/viewuser" component={viewuser} />
  <Route path="/EditUser/:id" component={createUser} />
  <Route path="/profile/:id" component={profile} />
  <Route exact path="/">
  
  <Redirect to="/dashboard" />
</Route>
  </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
