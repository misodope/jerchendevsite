import React from 'react';
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
    };
  }
  render() {
    return (
      <div>
        <nav className='navbar'>
          <ul className='navbar__container'>
            <li className='navbar__container--link'>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/view-work/'>View Work</Link>
            </li>
            <li>
              <Link to='/about/'>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
};