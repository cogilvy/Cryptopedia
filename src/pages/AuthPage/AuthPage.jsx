import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import {useEffect} from 'react';


function AuthPage({ user, setUser }) {
  let navigate = useNavigate();

  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm navigate={navigate} setUser={setUser} />
      <LoginForm navigate={navigate} setUser={setUser} />
    </main>
  )
}

export default AuthPage;