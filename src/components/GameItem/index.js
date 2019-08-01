import React, { useState, useCallback } from 'react';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';

import { compose } from '../../utils/compose';
import { getImageName } from '../../utils/getImageName';
import * as gameItems from '../../assets/images/game';
import playIcon from '../../assets/images/play.svg';
import './index.scss';

const PlayerGameItem = ({
  name, nickname, t,
}) => (
  <div className="player-game-item">
    <img
      className="player-game-item__icon-player"
      src={playIcon}
      alt="Player"
    />
    <img
      className="player-game-item__image-player"
      src={`https://ourway.gg/api/file/?name=${nickname}.png`}
      alt={`${nickname}image`}
    />
    <div className="player-game-item__info">
      <div className="player-game-item__name">{t(name)}</div>
      <div className="player-game-item__nickname">{nickname}</div>
    </div>
  </div>
);

const SocialGameItem = ({ title, description, t }) => (
  <div className="social-game-item">
    <img
      className="social-game-item__image"
      src={`https://ourway.gg/api/file/?name=${title}.svg`}
      alt={`image ${title}`}
    />
    {description && (
      <div className="social-game-item__description">{t(description)}</div>
    )}
    <div className="social-game-item__title">{title}</div>
  </div>
);

const GunGameItem = ({
  image,
  clicks,
  maxCounts,
  isShownCountOfClicks,
  isLastItem,
}) => {
  const heightPercent = `${(clicks * 70) / maxCounts}%` || '0%';

  const gunClassNames = classnames({
    'gun-game-item': true,
    'gun-game-item_last': isLastItem,
  });

  return (
    <div className={gunClassNames}>
      <img
        className="gun-game-item__image"
        src={`https://ourway.gg/api/file/?name=${image}`}
        alt="gun image"
      />
      {isShownCountOfClicks && (
        <div
          className="gun-game-item_filled"
          style={{ height: heightPercent }}
        />
      )}
    </div>
  );
};

const OtherGameItem = () => (
  <div className="other-game-item">
    <img
      className="other-game-item__image"
      src="https://ourway.gg/api/file/?name=extremum.svg"
      alt="Extremum"
    />
  </div>
);

const LastGameItem = ({ image, clicks, maxCounts }) => {
  const heightPercent = `${(clicks * 70) / maxCounts}%` || '0%';
  return (
    <div className="last-game-item">
      <img
        className="last-game-item__image"
        src={`https://ourway.gg/api/file/?name=${image}`}
        alt="Ourway"
      />
      <div
        className="last-game-item_filled"
        style={{ height: heightPercent }}
      />
    </div>
  );
};

const LogoGameItem = () => (
  <div className="logo-game-item">
    <img
      className="logo-game-item__image"
      src="https://ourway.gg/api/file/?name=OURWAY.svg"
      alt="Ourway"
    />
  </div>
);

const GameItem = ({
  src,
  id,
  onClick,
  clicks,
  isLastItem = false,
  is_open: isOpen,
  type,
  settings,
  maxCounts,
  t,
  i18n,
}) => {
  const isShownCountOfClicks = !isOpen && clicks > 0;
  const isPlayerGameItem = isOpen && type === 'player';
  const isSocialGameItem = isOpen && type === 'social';
  const isGunGameItem = !isOpen;
  const isOtherGameItem = isOpen && type === 'other';
  const isLogoGameItem = isOpen && type === 'logo';

  const [isIframeShown, setIsIframeShown] = useState(false);
  const [botSteamId, setBotSteamId] = useState('');

  const onAddBot = useCallback(() => {
    let lang = 'eng';

    if (
      i18n.language.toLowerCase() === 'ru' ||
      i18n.language.toLowerCase() === 'ru-ru'
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

  const onGameItemClick = React.useCallback(() => {
    if (!isOpen) {
      onClick(id);
    } else if (isLogoGameItem) {
      onAddBot();
    } else {
      settings.link && window.location.replace(settings.link);
    }
  }, [id, onClick, isOpen]);

  const gameItemClassNames = classnames({
    'game-item': true,
    'game-item_last': isLastItem,
  });

  const imageSource = React.useMemo(() => gameItems[getImageName(src)], [src]);

  return (
    <div onClick={onGameItemClick} className={gameItemClassNames}>
      {isPlayerGameItem && !isLastItem && (
        <PlayerGameItem
          t={t}
          name={settings.name}
          nickname={settings.nick}
        />
      )}
      {isSocialGameItem && !isLastItem && (
        <SocialGameItem
          description={settings.description}
          image={imageSource}
          title={settings.title}
          t={t}
        />
      )}
      {isGunGameItem && !isLastItem && (
        <GunGameItem
          clicks={clicks}
          title={settings.title}
          maxCounts={maxCounts}
          image={src}
          isLastItem={isLastItem}
          isShownCountOfClicks={isShownCountOfClicks}
        />
      )}
      {isShownCountOfClicks && (
        <div className="game-item__counter">{clicks}</div>
      )}
      {isOtherGameItem && !isLastItem && <OtherGameItem />}
      {isLastItem && !isOpen && (
      <LastGameItem
        image={src}
        maxCounts={maxCounts}
        clicks={clicks}
      />
      )}
      {isLogoGameItem && (
      <LogoGameItem />
      )}
      {isShownCountOfClicks && (
        <div className="game-item__counter">{clicks}</div>
      )}
      {isIframeShown && (
        <iframe
          title="Steam bot"
          src={`steam://friends/add/${botSteamId}`}
          width="0"
          height="0"
        />
      )}
    </div>
  );
};

export default compose(withTranslation())(GameItem);
