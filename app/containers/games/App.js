import React from 'react';

import Game from './Game';
import ResultModal from './ResultModal';
import DeckField from './DeckField';

// Todo他のルーティングでいちいち差し込まないようにしたい.
import ErrorSnackbarContainer from '../ErrorSnackbarContainer';

const App = () => {
    return (
        <div>
          <Game />
          <DeckField />
          <ResultModal />
          <ErrorSnackbarContainer />
        </div>
    );
};

export default App;
