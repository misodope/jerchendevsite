import React from 'react';

export class Contact extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    const {
      contactRef
    } = this.props;

    return (
      <section className='row' ref={contactRef}>
        Contact
      </section>
    );
  };
};