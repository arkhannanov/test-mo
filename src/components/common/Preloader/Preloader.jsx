import React from 'react';
import './Preloader.scss';

const Preloader = () => {
  return (
    <div className='preloader'>
      <svg className='preloader__svg' width='100%' height='100%' viewBox='0 0 100 100'>
        <circle className='segment1' cx='50' cy='50' r='40' fill='transparent' stroke='#84CCFF' strokeWidth='17'
                strokeDasharray='30 244.92' strokeDashoffset='0'></circle>
        <circle className='segment1' cx='50' cy='50' r='40' fill='transparent' stroke='#1D4D70' strokeWidth='17'
                strokeDasharray='244.92 244.92' strokeDashoffset='-29.5'></circle>
      </svg>
      <div className='preloader__content'>Идет загрузка... Подождите.</div>
    </div>
  )
}

export default Preloader;