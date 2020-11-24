import React, { useState } from 'react';
import Login from './views/login';

export default function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="App">
      <Login user={user} setUser={setUser} password={password} setPassword={setPassword} />
    </div>
  );
}
