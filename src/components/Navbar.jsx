import React from 'react';

import './Navbar.scss';

export class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      isActive: false,
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
    );
  };
};