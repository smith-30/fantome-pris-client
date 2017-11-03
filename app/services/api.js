import 'isomorphic-fetch';
import * as asyncModule from '../utils/asyncModule';

// https://github.com/redux-saga/redux-saga/blob/master/examples/real-world/services/api.js

const API_ROOT = process.env.API_ROOT;
const cardCount = 5;

export function fetchCard() {
    return fetch(`http://${API_ROOT}games/car`, {
        mode: 'cors',
    })
    .then(asyncModule.checkStatus)
    .then(asyncModule.parseJSON)
    .then(card => ({ card }))
    .catch(error => ({ error }));
}

export function connectWS() {
    const answer = Math.floor( Math.random() * (cardCount + 1 - 1) ) + 1;
    const ws = new WebSocket(`ws://${API_ROOT}games/ws/event`, [answer]);

    // Todo error handling.

    ws.onopen = () =>  {
        console.log('Connected');
    };

    return ws;
}
