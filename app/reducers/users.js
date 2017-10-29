import * as types from '../actions/types';
import _ from 'underscore';

const urlParams = new URLSearchParams(location.search);

const users = (state = [], action) => {
    switch (action.type) {
        case types.INCREMENT:
            return _.map(state, (user) => {
                if (user.id === action.id && user.score < 1000) {
                    user.score++;
                    return user;
                }
                return user;
            });
        case types.DECREMENT:
            return _.map(state, (user) => {
                if (user.id === action.id && user.score > 0) {
                    user.score--;
                    return user;
                }
                return user;
            });
        default:
            let playerCount = urlParams.get('player');
            if (playerCount <= 1) {
                playerCount = 1;
            }
            if (playerCount > 4) {
                playerCount = 4;
            }
            const players = [];
            for (let i = 1; i <= playerCount; i++) {
                const user = {
                    id: i,
                    name: `Player [${i}]`,
                    score: 0,
                    avater: `img/sample/${i}.png`
                };
                players.push(user);
            }
            return players;
    }
};

export default users;
