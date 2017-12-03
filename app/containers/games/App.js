import React from 'react';

import GameField from './GameField';
import ResultModal from './ResultModal';
import DeckField from './DeckField';
import SideBarContainer from '../SideBarContainer';
import { wrapper } from '../../styles/game.scss';

// Todo他のルーティングでいちいち差し込まないようにしたい.
import ErrorSnackbarContainer from '../ErrorSnackbarContainer';

const App = () => {
    return (
      <div>
        <div className={wrapper} >
          <SideBarContainer />
          <GameField />
          <DeckField />
        </div>
        <ResultModal />
        <ErrorSnackbarContainer />
      </div>
    );
};

export default App;
