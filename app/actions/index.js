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
