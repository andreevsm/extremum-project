import React from 'react';
import { withTranslation } from 'react-i18next';
import Timer from '../../blocks/Timer';
import LanguageChanger from '../../blocks/LanguageChanger';
import './index.scss';

const AppendBot = ({ t }) => {
  const [steamData, setSteamData] = React.useState({});
  // const [isModalOpen, setModalOpen] = React.useState(false);
  const sendLink = React.useCallback(() => {
    fetch('/extr/1.0/friends/get_invite/', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        language: 'english',
      }),
    })
      .then(res => res.json())
      // eslint-disable-next-line arrow-parens
      .then(data => {
        window.open(data.invite_link, '_blank');
        setSteamData(data);
      });
    // .then(() => setModalOpen(true));
  }, [steamData, setSteamData]);

  return (
    <>
      <LanguageChanger />
      <div className="append-bot-container">
        <Timer />
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <div className="append-bot-button-text" onClick={sendLink}>
          {t('Click here')}
        </div>
        <div className="append-bot-description">{t('Add bot')}</div>
      </div>
      {/* <Modal isOpen={isModalOpen} className="modal-content">
        <iframe
          title="steam"
          src={`steam://friends/add/${steamData.steamid64}`}
          onError={() => window.location.replace(steamData.invite_link)}
        />
      </Modal> */}
    </>
  );
};

export default withTranslation()(AppendBot);
