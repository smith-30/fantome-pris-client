import React from 'react';

import Game from './Game';
import ResultModal from './ResultModal';
import DeckField from './DeckField';

const App = () => {
    return (
        <div>
          <Game />
          <DeckField />
          <ResultModal />
        </div>
    );
};

export default App;
