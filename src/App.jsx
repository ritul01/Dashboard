import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <Dashboard user={user} /> : <Login setUser={setUser} />}
    </div>
  );
};

export default App;
