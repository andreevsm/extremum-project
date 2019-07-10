import React from 'react';
import { withTranslation } from 'react-i18next';

import Timer from '../../blocks/Timer';
import LoginForm from '../../forms/LoginForm';

import './index.scss';

class LoginPage extends React.Component {
  state = {
    nickname: '',
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  onChangeInput = (e) => {
    this.setState({
      nickname: e.target.value,
    });
  }

  render() {
    const { nickname } = this.state;
    const { t } = this.props;

    return (
      <div className="login-page">
        <div className="login-page__content">
          <div className="login-page__timer">
            <Timer />
          </div>
          <LoginForm
            onSubmitForm={this.onSubmitForm}
            onChangeInput={this.onChangeInput}
            nickname={nickname}
          />
        </div>
        <div className="login-page__footer">
          {!nickname
            && t('We need nickname')
          }
          {nickname
            && t('Send nickname')
          }
        </div>
      </div>
    );
  }
}

export default withTranslation()(LoginPage);
