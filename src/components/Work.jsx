import React from 'react';
<<<<<<< HEAD
import { Card } from './Card.jsx';
=======
import { Link } from "react-router-dom";
>>>>>>> ed0d7b314f47c06dfd96249c30a9b0d1172ac168

export class Work extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
<<<<<<< HEAD
    const {
      workRef
    } = this.props;

    return (
      <section className='row' ref={workRef}>
        <Card 
          className='card col-lg-5 col-md-12 col-sm-12 col-xs-12'
          cardHeader='Consumer Reports'
          cardTitle='Full Stack Software Engineer'
          cardText='This company has been around since before my time. Their first magazine issue was in 1936, I started here in 2018.
          I was given the opportunity to work at this company and still currently working here while they are moving towards a huge online movement.
          My role here is working primarily on the cars portion of the website where 
          I developed and maintained web applications, content, and services.'
        />

        <Card 
          cardHeader='Consumer Reports'
          cardTitle='Full Stack Software Engineer'
          cardText='This company has been around since before my time. Their first magazine issue was in 1936, I started here in 2018.
          I was given the opportunity to work at this company and still currently working here while they are moving towards a huge online movement.
          My role here is working primarily on the cars port'
        />
      </section>
=======
    return (
      <div>
        Work
      </div>
>>>>>>> ed0d7b314f47c06dfd96249c30a9b0d1172ac168
    );
  };
};