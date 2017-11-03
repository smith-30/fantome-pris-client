import 'isomorphic-fetch';
import * as asyncModule from '../utils/asyncModule';

// https://github.com/redux-saga/redux-saga/blob/master/examples/real-world/services/api.js

const API_ROOT = process.env.API_ROOT;
const cardCount = 5;

export function fetchCard() {
    return fetch(`http://${API_ROOT}games/card`, {
        mode: 'cors',
    })
    .then(asyncModule.checkStatus)
    .then(asyncModule.parseJSON)
    .catch((error) => {
        console.log('request failed', error);
        throw new Error(error);
    })
    .then((data) => {
        console.log('fetched', data);
        return data;
    });
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
