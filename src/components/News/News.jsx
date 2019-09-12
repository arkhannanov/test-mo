import React from 'react';
import './News.scss';

const News = (props) => {
  if (Object.keys(props.news).length !== 0) {
    return (
      <div className='news'>
        {props.news.map(element => <div key={element.id} className='news__item'>
          <div className='news__item-title'>{element.id}. {element.title}</div>
          <div className='news__item-content'>{element.text}</div>
        </div>)}
      </div>
    )
  } else return null;
}

export default News;