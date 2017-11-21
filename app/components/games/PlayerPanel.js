import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import {blue200} from 'material-ui/styles/colors';
import Plus from 'material-ui/svg-icons/image/control-point';
import Minus from 'material-ui/svg-icons/content/remove-circle-outline';

const PlayerPanel = ({player, doInc, doDec}) => (
  <Card>
    <CardHeader
      title={player.name}
      subtitle={player.score}
      avatar={player.avater}
    />
    <CardActions>
        <FlatButton
          onClick={() => doInc(player.id)}
          hoverColor={blue200}
          icon={<Plus/>}
        />
        <FlatButton
          icon={<Minus/>}
          hoverColor={blue200}
          onClick={() => doDec(player.id)} />
    </CardActions>
  </Card>
);

PlayerPanel.propTypes = {
    player: PropTypes.object,
    doInc: PropTypes.func,
    doDec: PropTypes.func,
};

export default PlayerPanel;
