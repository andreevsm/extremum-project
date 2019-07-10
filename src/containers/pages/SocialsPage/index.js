import React from 'react';
import { withTranslation } from 'react-i18next';

import Timer from '../../blocks/Timer';
import Socials from '../../../components/Socials';

import './index.scss';

const SocialsPage = () => (
  <div className="root">
    <div className="socials-page">
      <Timer />
      <Socials />
    </div>
  </div>
);

export default withTranslation()(SocialsPage);
