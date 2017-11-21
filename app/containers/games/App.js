import React from 'react';

import GameField from './GameField';
import ResultModal from './ResultModal';
import DeckField from './DeckField';
import { wrapper } from '../../styles/game.scss';

// Todo他のルーティングでいちいち差し込まないようにしたい.
import ErrorSnackbarContainer from '../ErrorSnackbarContainer';

function directionCheck() {
    const direction = Math.abs(window.orientation);
    console.log(`direction: ${direction}`);
    if(direction === 90) {
        console.log('横向き');
    } else {
        console.log('縦向き');
    }
}

const App = () => {
    console.log(screen.width);
    console.log(screen.height);

    const ua = navigator.userAgent.toLowerCase();
    // iPhone
    const isiPhone = (ua.indexOf('iphone') > -1);
    // iPad
    const isiPad = (ua.indexOf('ipad') > -1);
    // Android
    const isAndroid = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') > -1);
    // Android Tablet
    const isAndroidTablet = (ua.indexOf('android') > -1) && (ua.indexOf('mobile') === -1);

    // iOS
    if(isiPhone || isiPad) {
        window.onorientationchange = directionCheck;
    }
    // Android
    if(isAndroid || isAndroidTablet) {
        window.onresize = directionCheck;
    }
    directionCheck();

    return (
      <div>
        <div className={wrapper} >
          <GameField />
          <DeckField />
        </div>
        <ResultModal />
        <ErrorSnackbarContainer />
      </div>
    );
};

export default App;
