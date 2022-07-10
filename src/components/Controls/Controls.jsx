import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


function Controls({user, handleLogOut}) {
    return (
      <div className="controls">
        {
          user ?
          <>
            <button>
              <NavLink className="controls-link" to="/simulator">
                <img className="button-icon" src="https://cdn-icons-png.flaticon.com/512/2737/2737446.png" alt="icon"/><br/>
                Simulator
              </NavLink>
            </button>
            <button>
              <NavLink className="controls-link" to="/news">
                <img className="button-icon" src="https://i.imgur.com/4GTZOEV.png" alt="icon"/><br/>
                News
              </NavLink>
            </button>
            <button>
              <NavLink className="controls-link" to="/cryptos">
                <img className="button-icon" src="https://cdn3.iconfinder.com/data/icons/bitcoin-cryptocurrency-mining/100/bitcoin-07-512.png" alt="icon"/><br/>
                Cryptos
              </NavLink>
            </button>
            <button>
              <img className="button-icon" src="https://i.imgur.com/KQsVe9D.png" alt="icon"/><br/>
              <Dropdown text={user.name}>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </button>
          </>
          :
          <button>
            <NavLink className="controls-link" to="/auth">
              <img className="button-icon" src="https://i.imgur.com/KQsVe9D.png" alt="icon"/><br/>
              Signup/Login
            </NavLink>
          </button>
        }
      </div>
    )
}

export default Controls;