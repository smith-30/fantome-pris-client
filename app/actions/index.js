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
