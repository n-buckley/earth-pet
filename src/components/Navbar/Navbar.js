import React from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'
import { Button } from '../Button';

export default class Navbar extends React.Component {
  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}> 
          {/* if this.state.clicked is true,  icon will be set to fas fa-times which X icon. 
          Else, set the icon to fas fa-bars which is the is the 3 bars (aka hamburger bars)*/}
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        {/* set className to nav-menu active if clicked else className = nav-menu*/}
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>About Us</Button>
      </nav>
    )
  }
}