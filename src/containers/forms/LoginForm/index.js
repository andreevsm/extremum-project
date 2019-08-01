import React from 'react';
import { withTranslation } from 'react-i18next';
import classnames from 'classnames';

import { compose } from '../../../utils/compose';
import ValidationMessages from './ValidationMessages';

import './index.scss';

const LoginForm = ({
  t,
  onSubmitForm,
  onChangeInput,
  nickname,
  error,
}) => {
  const buttonClassNames = classnames({
    'login-form__button': true,
    'login-form__button_active': nickname.length,
  });

  return (
    <form
      className="login-form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitForm(nickname);
        return false;
      }}
    >
      <label className="login-form__label" htmlFor="nickname">
        {t('Specify nickname')}
      </label>
      <input
        minLength={4}
        maxLength={12}
        onKeyUp={onChangeInput}
        className="login-form__input"
        placeholder={t('Add here')}
        id="nickname"
        type="text"
      />
      {!!error && <ValidationMessages errorCode={error} />}
      <button
        disabled={!nickname.length}
        type="submit"
        className={buttonClassNames}
      >
        {t('Send')}
      </button>
    </form>
  );
};

export default compose(
  withTranslation(),
)(LoginForm);
