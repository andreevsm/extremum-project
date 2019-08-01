import React from 'react';

import Facebook from '../../assets/images/socials/facebook.svg';
import Twitter from '../../assets/images/socials/twitter.svg';
import Instagram from '../../assets/images/socials/instagram.svg';
import Youtube from '../../assets/images/socials/youtube.svg';
import VK from '../../assets/images/socials/vk.svg';

import './index.scss';

const Socials = () => (
  <div className="socials">
    <a href="https://www.facebook.com/OURWAYGG/" target="_blank" rel="noopener noreferrer" className="socials__item">
      <img src={Facebook} alt="Facebook" />
      <span className="socials__title">Facebook</span>
    </a>
    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ourwaygg" className="socials__item">
      <img src={Twitter} alt="Twitter" />
      <span className="socials__title">Twitter</span>
    </a>
    <a href="https://www.instagram.com/OURWAYGG/" target="_blank" rel="noopener noreferrer" className="socials__item">
      <img src={Instagram} alt="Instagram" />
      <span className="socials__title">Instagram</span>
    </a>
    <a href="https://www.youtube.com/channel/UCZw_GSVKur3557ksW7tqHUQ" target="_blank" rel="noopener noreferrer" className="socials__item">
      <img src={Youtube} alt="Youtube" />
      <span className="socials__title">Youtube</span>
    </a>
    <a href="https://vk.com/ourwaygg" target="_blank" rel="noopener noreferrer" className="socials__item">
      <img src={VK} alt="VK" />
      <span className="socials__title">VK</span>
    </a>
  </div>
);

export default Socials;
