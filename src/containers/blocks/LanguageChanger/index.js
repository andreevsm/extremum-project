import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

import './index.scss';

const LanguageChanger = ({
  t,
  i18n,
}) => {
  const [language, setLanguage] = useState('');

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [setLanguage, i18n, language]);

  return (
    <div className="language-changer">
      <button
        type="button"
        onClick={() => setLanguage('ru')}
        style={i18n.language === 'ru' ? { color: 'white' } : null}
        className="language-changer__button"
      >
        {t('ru')}
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        style={i18n.language === 'en' ? { color: 'white' } : null}
        className="language-changer__button"
      >
        {t('en')}
      </button>
    </div>
  );
};

export default withTranslation()(LanguageChanger);
