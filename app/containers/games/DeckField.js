import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Card, CardActions, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ReactCardFlip from 'react-card-flip';
import { fetchCard } from '../../actions';
import { deckField } from '../../styles/deckField.scss';

const buttonWidth = {
    width: '100%'
};

// カードは横向きでいいかも
const DeckField = ({card, game, drawCard, screen}) => (
  <div className={deckField} style={screen.visibility}>
    <ReactCardFlip isFlipped={card.isFlipped}>
      <Card key="front">
        <CardMedia>
          <img src={card.src} alt="" />
        </CardMedia>
        <CardActions>
          <FlatButton
            label="Draw"
            disabled={game.isPlay}
            onClick={() => drawCard()}
            style={buttonWidth} />
        </CardActions>
      </Card>

      <Card key="back">
        <CardMedia>
          <img src={card.src} alt="" />
        </CardMedia>
        <CardActions>
          <FlatButton
            label="Draw"
            disabled={game.isPlay}
            onClick={() => drawCard()}
            style={buttonWidth} />
        </CardActions>
      </Card>
    </ReactCardFlip>
  </div>
);

DeckField.propTypes = {
    screen: PropTypes.object,
    game: PropTypes.object,
    card: PropTypes.object,
    drawCard: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        screen: state.screen,
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
