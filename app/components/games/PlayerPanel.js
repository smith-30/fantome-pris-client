import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

const PlayerPanel = ({player, doInc, doDec}) => (
  <Card>
    <CardHeader
      title={player.name}
      subtitle={player.score}
      avatar={player.avater}
    />
    <CardActions>
        <FlatButton label="+1" onClick={() => doInc(player.id)} />
        <FlatButton label="-1" onClick={() => doDec(player.id)} />
    </CardActions>
  </Card>
);

PlayerPanel.propTypes = {
    player: PropTypes.object,
    doInc: PropTypes.func,
    doDec: PropTypes.func,
};

export default PlayerPanel;
