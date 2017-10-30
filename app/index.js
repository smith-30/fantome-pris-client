import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

// if you want to set initialState, pass the variable.
const store = configureStore();

render(
    <MuiThemeProvider>
      <AppContainer>
          <Root store={store} history={history} />
      </AppContainer>
    </MuiThemeProvider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const newConfigureStore = require('./store/configureStore');
        const newStore = newConfigureStore.configureStore();
        const newHistory = newConfigureStore.history;
        const NewRoot = require('./containers/Root').default;
        render(
            <MuiThemeProvider>
              <AppContainer>
                  <NewRoot store={newStore} history={newHistory} />
              </AppContainer>
            </MuiThemeProvider>,
            document.getElementById('root')
        );
    });
}
