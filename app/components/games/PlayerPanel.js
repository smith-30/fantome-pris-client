import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';
import {grey300, grey600} from 'material-ui/styles/colors';
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
          hoverColor={grey300}
          icon={<Plus color={grey600} />}
        />
        <FlatButton
          icon={<Minus color={grey600}/>}
          hoverColor={grey300}
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
