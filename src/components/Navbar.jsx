import React from 'react';
<<<<<<< HEAD

import './Navbar.scss';
=======
import { Link } from "react-router-dom";
>>>>>>> ed0d7b314f47c06dfd96249c30a9b0d1172ac168

export class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
<<<<<<< HEAD
      isMobile: false,
    };
  }

  componentDidMount() {
    
  }

  render() {
    const {
      scrollToHome,
    } = this.props;

    const { isMobile } = this.state;

    return (
        <nav className='navigation row fixed-bottom'>
          <div className='navigation__container isMobile'>
            <a href='https://s3.amazonaws.com/misodope/JerryChenResume.pdf' target='_blank' className='navigation__container--link'>Resume</a>
            <a href='#' className='navigation__container--link' onClick={scrollToHome}><i className="fas fa-long-arrow-alt-up"></i></a>
          </div>
        </nav>
=======
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
>>>>>>> ed0d7b314f47c06dfd96249c30a9b0d1172ac168
    );
  };
};