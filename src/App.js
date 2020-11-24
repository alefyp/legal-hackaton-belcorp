import React, {useState } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './views/login'
import Dashboard from './views/dashboard';


  const App = () => {
    const [user, setUser]= useState('');

  return (
    <div className="App">
     
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' > <Login user ={user} setUser={setUser}/></Route>{/* Public Page */}
            <Route path='/dashboard' > <Dashboard /></Route> {/* //already login */}
          </Switch>
        </div>
        </BrowserRouter>
    
    </div>
  );
};


export default App;
