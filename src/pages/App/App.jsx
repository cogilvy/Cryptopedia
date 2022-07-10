import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage setUser={setUser} user={user} />} />
          </Routes>
        </>
        :
        <>
          <NavBar setUser={setUser} user={user}/>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage setUser={setUser} user={user} />} />
          </Routes>
        </>
      }
    </main>
  );
}

export default App;
