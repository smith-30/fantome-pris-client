import { call, put, take, takeEvery } from 'redux-saga/effects';
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

        // Todo 別タスクに切り分けてsubし続けたい
        // start subscribe
        // yield fork(receiveAnswer(wsConn));

        // change game status
        yield put({type: types.PLAY});

        // change card state
        yield put({type: types.FETCH_CARD_SUCCESS, card: card});
    } catch (e) {
        yield put({type: types.FETCH_CARD_FAILED, message: e.message});
    }
}

function* sendAnswer() {
    const { wsConn, answer } = yield take(types.TOUCH);
    const isConn = wsConn instanceof WebSocket;

    // check wsConn
    if (!isConn) {
        return;
    }

    try {
        const msg = yield call(Api.sendAnswer, wsConn, answer);

        if (msg.result) {
            yield put({type: types.OPEN_MODAL});
            yield put({type: types.READY});
        }
    } catch (e) {
        yield put({type: types.READY});
    }
}

// function* receiveAnswer(wsConn) {
//     let loop = true;
//     while (loop) {
//         if (!wsConn instanceof WebSocket) {
//             loop = false;
//         }

//         wsConn.onmessage = (e) => {
//             let msg = null;
//             try {
//                 msg = JSON.parse(e.data);
//             } catch(error) {
//                 console.error(`Error parsing : ${e.data}`);
//             }
//             if (msg) {
//                 console.log(msg);
//             }
//         };
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
    yield takeEvery(types.TOUCH, sendAnswer);
    // yield takeEvery(types.TOUCH, receiveAnswer);
}

export default mySaga;
