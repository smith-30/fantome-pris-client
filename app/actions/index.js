import * as types from './types';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function play() {
    return {
        type: types.PLAY
    };
}

export function ready() {
    return {
        type: types.READY
    };
}

export function open() {
    return {
        type: types.OPEN,
    };
}

export function close() {
    return {
        type: types.CLOSE,
    };
}

export function increment(id) {
    return {
        type: types.INCREMENT,
        id,
    };
}

export function decrement(id) {
    return {
        type: types.DECREMENT,
        id,
    };
}

export function fetchCard() {
    return{
        type: types.FETCH_CARD
    };
}

export function fetchCardSuccess() {
    return{
        type: types.FETCH_CARD_SUCCESS
    };
}

export function connectWS() {
    return{
        type: types.CONNECT_WS
    };
}


export function closeWS() {
    return{
        type: types.CLOSE_WS
    };
}

export function sendAnswer() {
    return{
        type: types.SEND_ANSWER
    };
}
