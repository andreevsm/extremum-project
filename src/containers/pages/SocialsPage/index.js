import React from 'react';
import { withTranslation } from 'react-i18next';

import { compose } from '../../../utils/compose';
import WithLanguageChanger from '../../layouts/WithLanguageHeader';
import Timer from '../../blocks/Timer';
import Socials from '../../../components/Socials';
import { normilizeTimeValue } from '../../../utils/functions';

import './index.scss';

const SocialsPage = () => (
  <WithLanguageChanger>
    <div className="socials-page">
      <Timer
        renderer={({ seconds, minutes, hours }) => (
          <div>
            {`${normilizeTimeValue(hours)}:${normilizeTimeValue(
              minutes,
            )}:${normilizeTimeValue(seconds)}`}
          </div>
        )}
      />
      <Socials />
    </div>
  </WithLanguageChanger>
);

export default compose(withTranslation())(SocialsPage);
