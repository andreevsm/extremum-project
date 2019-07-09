import React from 'react';
import { withTranslation } from 'react-i18next';

import './index.scss';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  state = {
    nickname: '',
  };

  onChangeInput(e) {
    this.setState({
      nickname: e.target.value,
    });
  }

  onSubmitForm(e) {
    e.preventDefault();
  }

  render() {
    const { t } = this.props;
    const { nickname } = this.state;

    return (
      <form className="root" onSubmit={this.onSubmitForm}>
        <label className="login-form__label" htmlFor="nickname">
          {t('Specify nickname')}
        </label>
        <input
          onKeyDown={this.onChangeInput}
          className="login-form__input"
          placeholder={t('Add here')}
          id="nickname"
          type="text"
        />
        <button
          disabled={!nickname.length}
          type="submit"
          // eslint-disable-next-line operator-linebreak
          className={`login-form__button ${nickname.length &&
            'login-form__button_active'}`}
        >
          {t('Send')}
        </button>
      </form>
    );
  }
}

export default withTranslation()(LoginForm);
