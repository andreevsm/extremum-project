import React from 'react';
import { withTranslation } from 'react-i18next';

import './index.scss';

const LoginForm = ({
  t,
  onSubmitForm,
  onChangeInput,
  nickname,
}) => (
  <form className="login-form" onSubmit={onSubmitForm}>
    <label className="login-form__label" htmlFor="nickname">
      {t('Specify nickname')}
    </label>
    <input
      onKeyUp={onChangeInput}
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

export default withTranslation()(LoginForm);
