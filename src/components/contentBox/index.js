import React from 'react';
import './styles.css';

const ContentBox = ({ firstValue, firstTitle, secondValue, secondTitle }) => (
  //Assuming that there always are two values
  <div className='content-box'>
    <div className='content-box-first'>
      {`${firstTitle} : ${firstValue}`}
    </div>
    <div className='content-box-second'>
    {`${secondTitle} : ${secondValue}`}
    </div>
  </div>
);

export default ContentBox;
