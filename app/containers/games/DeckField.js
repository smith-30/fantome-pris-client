import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, CardActions, CardMedia, CardTitle} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { fetchCard } from '../../actions';
import { deckField } from '../../styles/deckField.scss';

// カードは横向きでいいかも
const DeckField = ({card, game, drawCard}) => (
  <div className={deckField}>
    <Card>
      <CardMedia
        overlay={<CardTitle title="Draw Card" subtitle="" />}
      >
        <img src={card.src} alt="" />
      </CardMedia>
      <CardActions>
        <FlatButton
          label="Play"
          disabled={game.isPlay}
          onClick={() => drawCard()} />
      </CardActions>
    </Card>
  </div>
);

DeckField.propTypes = {
    game: PropTypes.object,
    card: PropTypes.object,
    drawCard: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        card: state.card,
        game: state.game,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        drawCard: () => dispatch(fetchCard()),
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckField);