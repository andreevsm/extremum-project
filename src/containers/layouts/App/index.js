import React from 'react';
import { withTranslation } from 'react-i18next';

import LoginForm from '../../forms/LoginForm';
import './index.scss';

class App extends React.Component {
  onSubmitForm(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="root">
        <LoginForm
          onSubmitForm={this.onSubmitForm}
        />
      </div>
    );
  }
}

export default withTranslation()(App);
