import React, { useCallback } from 'react';
import { withTranslation } from 'react-i18next';
import Timer from '../../blocks/Timer';
import LanguageChanger from '../../blocks/LanguageChanger';
import './index.scss';

const AppendBot = ({
  t,
  i18n,
}) => {
  const onAddBot = useCallback(() => {
    fetch('/extr/1.0/friends/get_invite/', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        language: i18n.language,
      }),
    })
      .then(res => res.json())
      .then(({
        invite_link,
        steamid64,
      }) => {
        if (invite_link) {
          window.open(invite_link, '_blank');
        } else {
          window.open(`steam://friends/add/${steamid64}/`, '_blank');
        }
      });
  }, [i18n]);

  return (
    <>
      <LanguageChanger />
      <div className="append-bot-container">
        <Timer />
        <div className="append-bot-button-text" onClick={onAddBot}>
          {t('Click here')}
        </div>
        <div className="append-bot-description">{t('Add bot')}</div>
      </div>
    </>
  );
};

export default withTranslation()(AppendBot);
