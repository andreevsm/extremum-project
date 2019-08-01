import React, { useState, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import classnames from 'classnames';

import { compose } from '../../../utils/compose';

import './index.scss';

const languages = [
  { id: 1, lang: 'ru', i18n: 'ru' },
  { id: 2, lang: 'en', i18n: 'eng' },
];

const LanguageChanger = ({
  t,
  i18n,
  isWhiteBackground,
}) => {
  let lang = 'eng';

  if (i18n.language.toLowerCase() === 'ru' || i18n.language.toLowerCase() === 'ru-ru') {
    lang = 'ru';
  }

  const [language, setLanguage] = useState(lang);
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [setLanguage, i18n, language]);

  const languageChangeButtonClassNames = classnames('language-changer__button', {
    'language-changer__button_white-background': isWhiteBackground,
  });

  return (
    <div className="language-changer">
      {languages.map(({ id, lang, i18n }) => (
        <button
          key={id}
          type="button"
          onClick={() => setLanguage(i18n)}
          className={languageChangeButtonClassNames}
          style={{ color: language === i18n && !isWhiteBackground ? 'white' : language === i18n && isWhiteBackground ? 'black' : null }}
        >
          {t(lang)}
        </button>
      ))}
    </div>
  );
};


export default compose(
  withTranslation(),
)(LanguageChanger);
