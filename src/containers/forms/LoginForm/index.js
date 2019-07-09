import React from 'react';
import { withTranslation } from 'react-i18next';

import './index.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  state = {
    nickname: '',
  };

  onChangeInput(e) {
    // console.log(e.target.value);
    this.setState({
      nickname: e.target.value,
    });
  }

  render() {
    const { t, onSubmitForm } = this.props;
    const { nickname } = this.state;

    return (
      <form
        className="root"
        onSubmit={onSubmitForm}
      >
        <label className="login-form__label" htmlFor="nickname">{t('Specify nickname')}</label>
        <input onKeyDown={this.onChangeInput} className="login-form__input" placeholder={t('Add here')} id="nickname" type="text" />
        <button
          disabled={!nickname.length}
          type="submit"
          className={`login-form__button ${nickname.length && 'login-form__button_active'}`}
        >
          {t('Send')}
        </button>
      </form>
    );
  }
}

export default withTranslation()(LoginForm);
