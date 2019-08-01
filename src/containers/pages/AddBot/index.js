import React, { useCallback, useState } from 'react';
import { withTranslation } from 'react-i18next';

import { compose } from '../../../utils/compose';
import Timer from '../../blocks/Timer';
import { normilizeTimeValue } from '../../../utils/functions';
import './index.scss';
import WithLanguageChanger from '../../layouts/WithLanguageHeader';

const AddBot = ({ t, i18n }) => {
  const [isIframeShown, setIsIframeShown] = useState(false);
  const [botSteamId, setBotSteamId] = useState('');

  const onAddBot = useCallback(() => {
    let lang = 'eng';

    if (
      i18n.language.toLowerCase() === 'ru'
      || i18n.language.toLowerCase() === 'ru-ru'
    ) {
      lang = 'ru';
    }
    fetch('https://ourway.gg/api/add-bot/', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        language: lang,
      }),
    })
      .then(res => res.json())
      .then(({ invite_link, steamid64 }) => {
        window.location.href = invite_link;
        setIsIframeShown(true);
        setBotSteamId(steamid64);
        return false;
      })
      .catch(error => alert(error));
  }, [i18n, setIsIframeShown, setBotSteamId]);

  return (
    <WithLanguageChanger>
      <div className="append-bot-container">
        <Timer
          renderer={({ seconds, minutes, hours }) => (
            <div>
              {`${normilizeTimeValue(hours)}:${normilizeTimeValue(
                minutes,
              )}:${normilizeTimeValue(seconds)}`}
            </div>
          )}
        />
        <button
          type="button"
          className="append-bot-button-text"
          onClick={() => onAddBot()}
        >
          {t('Click here')}
        </button>
        <div className="append-bot-description">{t('Add bot')}</div>
      </div>
      {isIframeShown && (
        <iframe
          title="Steam bot"
          src={`steam://friends/add/${botSteamId}`}
          width="0"
          height="0"
        />
      )}
    </WithLanguageChanger>
  );
};

export default compose(withTranslation())(AddBot);
