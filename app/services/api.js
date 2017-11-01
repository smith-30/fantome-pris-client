import 'isomorphic-fetch';
import * as asyncModule from '../utils/asyncModule';

// https://github.com/redux-saga/redux-saga/blob/master/examples/real-world/services/api.js

// Todo from const.
const API_ROOT = process.env.API_ROOT;

export function fetchCard() {
    return fetch(`${API_ROOT}games/card`, {
        mode: 'cors',
    })
    .then(asyncModule.checkStatus)
    .then(asyncModule.parseJSON)
    .catch((error) => {
        console.log('request failed', error);
        return error;
    })
    .then((data) => {
        console.log(data);
        return data;
    });
}
