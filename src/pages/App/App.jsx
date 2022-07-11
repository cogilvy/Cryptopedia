import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import CryptoPage from "../CryptoPage/CryptoPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar setUser={setUser} user={user}/>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route path="/signup" element={<SignUpForm setUser={setUser} />} />
        <Route path="/cryptos" element={<CryptoPage />} />
      </Routes>
    </main>
  );
}

export default App;
