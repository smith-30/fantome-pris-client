import React from 'react';

import GameField from './GameField';
import ResultModal from './ResultModal';
import DeckField from './DeckField';

// Todo他のルーティングでいちいち差し込まないようにしたい.
import ErrorSnackbarContainer from '../ErrorSnackbarContainer';

const App = () => {
    return (
        <div>
          <GameField />
          <DeckField />
          <ResultModal />
          <ErrorSnackbarContainer />
        </div>
    );
};

export default App;
