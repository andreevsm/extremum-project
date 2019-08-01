import React from 'react';

import LanguageChange from '../../blocks/LanguageChanger';

import './index.scss';

const WithLanguageChanger = ({ children }) => (
  <>
    <div className="with-language-changer">
      <div className="with-language-changer__block">
        <LanguageChange />
      </div>
      {children}
    </div>
  </>
);

export default WithLanguageChanger;
