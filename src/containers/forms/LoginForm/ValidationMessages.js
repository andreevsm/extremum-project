import React from 'react';
import { withTranslation } from 'react-i18next';

import { compose } from '../../../utils/compose';

const ValidationMessages = ({
  errorCode,
  t,
}) => (
  <div className="error-message">
    {errorCode === 1 && t('required')}
    {errorCode === 2 && t('min limit')}
    {errorCode === 3 && t('max limit')}
    {errorCode === 4 && t('invalid')}
    {errorCode === 5 && t('swearing')}
    {errorCode === 6 && t('already exists')}
    {errorCode === 7 && t('already set')}
  </div>
);

export default compose(
  withTranslation(),
)(ValidationMessages);
