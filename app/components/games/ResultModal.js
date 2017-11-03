import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

import PlayerPanel from './PlayerPanel';

// @Todo expand modal height. move action button to left.

let initBool = true;

const ResultModal = ({modal, players, doClose, doInc, doDec}) => {
    console.log(modal);
    const actions = [
        <FlatButton
          label="Done"
          primary={initBool}
          onClick={() => doClose()} />
    ];

    let panels = [];
    players.forEach(p => {
        panels.push(
          <PlayerPanel key={p.id} player={p} doInc={doInc} doDec={doDec} />
        );
    });
    return (
      <div>
        <Dialog
          title="Player Scores"
          actions={actions}
          open={modal.open}
          autoScrollBodyContent={initBool}
        >
          {panels}
        </Dialog>
      </div>
    );
};

ResultModal.propTypes = {
    modal: PropTypes.object,
    players: PropTypes.array,
    doClose: PropTypes.func,
    doInc: PropTypes.func,
    doDec: PropTypes.func,
};

export default ResultModal;
