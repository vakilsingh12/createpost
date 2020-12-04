import React from 'react'
import Login from './Login';
import Signup from './signup';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
function App() {
    return (
     <BrowserRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup}/>
      </Switch>
      </BrowserRouter>
    )
}

export default App
