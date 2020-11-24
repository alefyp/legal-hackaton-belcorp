import React, {useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Dashboard from './views/dashboard';

export default function Router() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/"><App user={user} setUser={setUser} password={password} setPassword={setPassword}/></Route>
            <Route path="/Dashboard"><Dashboard user={user} setUser={setUser} /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}
