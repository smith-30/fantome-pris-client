import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../services';
import * as types from '../actions/types';

// ワーカー Saga: FETCH_CARD Action によって起動する
function* fetchCard() {
    // fetch card
    const {card, error} = yield call(Api.fetchCard);

    if (!card) {
        yield put({type: types.FETCH_CARD_FAILED, message: error.message});
        return;
    }

    // Todo Websocket connect handling.

    try {
        // create websocket connection
        const wsConn = yield call(Api.connectWS, card.answer);
        yield put({type: types.CONNECT_WS, wsConn: wsConn});

        // change game status
        yield put({type: types.PLAY});

        // change card state
        yield put({type: types.FETCH_CARD_SUCCESS, card: card});
    } catch (e) {
        yield put({type: types.FETCH_CARD_FAILED, message: e.message});
    }
}

// function* watchFetchCard() {
      //  const loop = true;
//     while(loop) {
//         // const {card} = yield take(types.FETCH_CARD, fetchCard);
//         yield take(types.FETCH_CARD, fetchCard);
//         // yield fork(loadStargazers, fullName, true)
//     }
// }

/**
 * fork
 * https://github.com/redux-saga/redux-saga/blob/master/examples/real-world/sagas/index.js
 */

/*
  FETCH_CARD Action が送出されるたびに fetchCard を起動します。
  ユーザ情報の並列取得にも対応しています。
*/
function* mySaga() {
    yield takeEvery(types.FETCH_CARD, fetchCard);
}

// export default function* root() {
//     yield all([
//         fork(watchFetchCard),
//     ]);
// }

export default mySaga;
