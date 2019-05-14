import React from 'react';
<<<<<<< HEAD

import './About.scss';
=======
import { Link } from "react-router-dom";
>>>>>>> ed0d7b314f47c06dfd96249c30a9b0d1172ac168

export class About extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
<<<<<<< HEAD
    const {
      aboutRef
    } = this.props;

    return (
      <section className='about row' ref={aboutRef}>
        <div className='about__container'>
          <p className='about__container--blurb lead'>
            I'm currently working at Consumer Reports as a Full Stack Software Engineer, residing in New York. 
            Here, I'm using PHP, Laravel, TypeScript, React, and Vue frameworks.
            I am passionate about all things tech, web, and code. I hope to be pursuing my Master's Degree soon to expand my knowledge of Computer Science.
          </p>
          {/* <i className='devicon-php-plain'/>
          <i className='devicon-laravel-plain-wordmark'/>
          <i className='devicon-typescript-plain'/>
          <i className='devicon-javascript-plain'/>
          <i className='devicon-react-original-wordmark'/>
          <i className='devicon-vuejs-plain-wordmark'/>
          <i className='devicon-webpack-plain-wordmark'/>
          <i className='devicon-nodejs-plain-wordmark'/>
          <i className='devicon-sass-original'/> */}
        </div>
      </section>
=======
    return (
      <div>
        About
      </div>
>>>>>>> ed0d7b314f47c06dfd96249c30a9b0d1172ac168
    );
  };
};