import React from 'react';

import Facebook from '../../assets/images/socials/facebook.svg';
import Twitter from '../../assets/images/socials/twitter.svg';
import Instagram from '../../assets/images/socials/instagram.svg';
import Youtube from '../../assets/images/socials/youtube.svg';

import './index.scss';

const Socials = () => (
  <div className="socials">
    <div className="socials__item">
      <img src={Facebook} alt="Facebook" />
      <span className="socials__title">Facebook</span>
    </div>
    <div className="socials__item">
      <img src={Twitter} alt="Twitter" />
      <span className="socials__title">Twitter</span>
    </div>
    <div className="socials__item">
      <img src={Instagram} alt="Instagram" />
      <span className="socials__title">Instagram</span>
    </div>
    <div className="socials__item">
      <img src={Youtube} alt="Youtube" />
      <span className="socials__title">Youtube</span>
    </div>
  </div>
);

export default Socials;
