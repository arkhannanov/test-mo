import React from 'react';
import './Profile.scss';
import vk from '../../assets/images/vk.png';
import telegram from '../../assets/images/telegram.png';
import web from '../../assets/images/web.png';
import youtube from '../../assets/images/youtube.png';
import twitter from '../../assets/images/twitter.png';
import twitch from '../../assets/images/twitch.png';

const Profile = (props) => {

  if (Object.keys(props.profile).length !== 0) {
  return (
    <div className='profile'>
      <div className='profile__city'>Город: {props.profile.city}</div>
      <div className='profile__languages'>Знание языков:
        {props.profile.languages.map(element => <div key={element} className='profile__languages-item'>+ {element}</div>)}
      </div>
      <a href={props.profile.social[2].link} target="_blank" rel="noopener noreferrer" className='profile__social-icon'><img src={web} alt='vk'/></a>
      <a href={props.profile.social[0].link} target="_blank" rel="noopener noreferrer" className='profile__social-icon'><img src={vk} alt='vk'/></a>
      <a href={props.profile.social[1].link} target="_blank" rel="noopener noreferrer" className='profile__social-icon'><img src={telegram} alt='vk'/></a>
      <a href={props.profile.social[3].link} target="_blank" rel="noopener noreferrer" className='profile__social-icon'><img src={youtube} alt='vk'/></a>
      <a href={props.profile.social[4].link} target="_blank" rel="noopener noreferrer" className='profile__social-icon'><img src={twitter} alt='vk'/></a>
      <a href={props.profile.social[5].link} target="_blank" rel="noopener noreferrer" className='profile__social-icon'><img src={twitch} alt='vk'/></a>
    </div>
  )} else return null;
}

export default Profile;