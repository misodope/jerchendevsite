import React from 'react';
<<<<<<< HEAD
import {detectScreen} from '../utils/utils';
import * as classNames from 'classnames';

import './Home.scss';
=======
import { Link } from "react-router-dom";
>>>>>>> ed0d7b314f47c06dfd96249c30a9b0d1172ac168

export class Home extends React.Component {
  constructor() {
    super();

    this.state = {
<<<<<<< HEAD
      isMobile: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  resize = () => {
    this.setState({
      isMobile: detectScreen('mobile'),
    })
  }

  render() {
    const {
      homeRef
    } = this.props;

    const {
      isMobile
    } = this.state;

    const nameCls = classNames('home__container--name', {
      'display-2': !isMobile,
      'display-4': isMobile,
    });

    const jobCls = classNames('home__container--job-title', {
      'display-3': !isMobile,
      'display-4': isMobile,
    });

    return (
      <section className='home row' ref={homeRef}>
        <div className='home__container'>
          <h1 className={nameCls}>Hey, I'm Jerry.</h1>
          <h1 className={jobCls}>Full Stack Engineer</h1>
        </div>
      </section>
=======
    };
  }
  render() {
    return (
      <div>
        Home
      </div>
>>>>>>> ed0d7b314f47c06dfd96249c30a9b0d1172ac168
    );
  };
};