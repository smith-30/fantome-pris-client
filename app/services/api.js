import 'isomorphic-fetch';
import * as asyncModule from '../utils/asyncModule';

// https://github.com/redux-saga/redux-saga/blob/master/examples/real-world/services/api.js

const API_ROOT = process.env.API_ROOT;

export function fetchCard() {
    return fetch(`http://${API_ROOT}games/card`, {
        mode: 'cors',
    })
    .then(asyncModule.checkStatus)
    .then(asyncModule.parseJSON)
    .then(card => ({ card }))
    .catch(error => ({ error }));
}

export function connectWS(answer) {
    const ws = new WebSocket(`ws://${API_ROOT}games/ws/event`, [answer]);

    // Todo error handling.

    ws.onopen = () =>  {
        console.log('Connected');
    };

    return ws;
}
