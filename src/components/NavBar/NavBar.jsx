import { NavLink } from "react-router-dom";
import './NavBar.css';
import * as userService from "../../utilities/users-service";
import Controls from '../Controls/Controls';
import { useNavigate } from 'react-router-dom';

function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut() {
    userService.logOut();
    setUser(null);
    navigate('/');
  }

  return (
    <div className="navbar">
      <NavLink className="controls-link" to="/">
        <div className="logo-container">
          <img
            className="logo"
            src="https://hashoshi.com/wp-content/uploads/2019/01/icx_coin_icon.png"
            alt="logo"
          />
          <h2 id="logo-name">Cryptopedia</h2>
        </div>
      </NavLink>
      <Controls user={user} handleLogOut={handleLogOut}/>
    </div>
  );
}

export default NavBar;