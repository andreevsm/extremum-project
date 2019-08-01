import React from 'react';
import { withTranslation } from 'react-i18next';

import WithLanguageChanger from '../../layouts/WithLanguageHeader';
import { cookies } from '../../../constants';
import Timer from '../../blocks/Timer';
import LoginForm from '../../forms/LoginForm';
import Socials from '../../../components/Socials';
import { compose } from '../../../utils/compose';
import { normilizeTimeValue } from '../../../utils/functions';

import './index.scss';

class LoginPage extends React.Component {
  state = {
    nickname: '',
    error: 0,
    isNicknameAdded: false,
  };

  onSubmitForm = nickname => {
    fetch('https://ourway.gg/api/username/', {
      method: 'POST',
      body: JSON.stringify({
        username: nickname,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          this.setState({
            error: data.error.code,
          });
          return;
        }
        if (data.username) {
          localStorage.setItem(cookies.user, data.username);
          this.setState({
            isNicknameAdded: true,
          });
        }
      })
      .catch(error =>
        this.setState({
          error: error.code,
        }),
      );
  };

  onChangeInput = e => {
    this.setState({
      nickname: e.target.value,
    });
  };

  render() {
    const { nickname, error, isNicknameAdded } = this.state;
    const { t } = this.props;

    return (
      <WithLanguageChanger>
        <div className="login-page">
          <div className="login-page__content">
            <Timer
              isNicknameAdded={isNicknameAdded}
              renderer={({ seconds, minutes, hours }) => (
                <div>
                  {`${normilizeTimeValue(hours)}:${normilizeTimeValue(
                    minutes,
                  )}:${normilizeTimeValue(seconds)}`}
                </div>
              )}
            />
            {!isNicknameAdded && (
              <LoginForm
                onSubmitForm={this.onSubmitForm}
                onChangeInput={this.onChangeInput}
                nickname={nickname}
                error={error}
              />
            )}
            {isNicknameAdded && (
              <React.Fragment>
                <div className="login-page__nickname">{nickname}</div>
                <Socials />
                <div className="login-page__subscribe">{t('Well done')}</div>
              </React.Fragment>
            )}
          </div>
          {!isNicknameAdded && (
            <div className="login-page__footer">
              {!nickname && t('We need nickname')}
              {nickname && t('Send nickname')}
            </div>
          )}
        </div>
      </WithLanguageChanger>
    );
  }
}

export default compose(withTranslation())(LoginPage);
