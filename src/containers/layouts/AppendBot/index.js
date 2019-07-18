import React from 'react';
import { withTranslation } from 'react-i18next';

import LanguageChanger from '../../blocks/LanguageChanger';
import Timer from '../../blocks/Timer';
import './index.scss';

const AppendBot = ({
  t,
}) => (
  <React.Fragment>
    <LanguageChanger />
    <div className="append-bot-container">
      <Timer />
      <div className="append-bot-button-text">{t('Click here')}</div>
      <div className="append-bot-description">
        {t('Add bot')}
      </div>
    </div>
  </React.Fragment>
);

export default withTranslation()(AppendBot);
