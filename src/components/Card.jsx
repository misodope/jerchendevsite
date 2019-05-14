import React from 'react';

export class Card extends React.Component {
  render() {
    const {cardTitle, cardText, cardImg, cardHeader, className='card col-lg-5 offset-lg-1 col-md-12 col-sm-12 col-xs-12'} = this.props;

    return (
      <div className={className}>
        {cardImg && <img className='card-img-top' src={cardImg} />}
        <div className='card-body'>
          <h5 className='card-title'>{cardHeader}</h5>
          <h5 className='card-title'>{cardTitle}</h5>
          <p className='card-text'>{cardText}</p>
        </div>
      </div>
    )
  }
}