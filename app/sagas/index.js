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

        // Todo 別タスクに切り分けてsubし続けたい
        // start subscribe
        // yield fork(receiveAnswer(wsConn));

        // change game status
        yield put({type: types.PLAY});

        // change card state
        card.isFlipped = true;
        yield put({type: types.FETCH_CARD_SUCCESS, card: card});
    } catch (e) {
        yield put({type: types.FETCH_CARD_FAILED, message: e.message});
    }
}

function* sendAnswer(action) {
    const { wsConn, answer } = action;

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
            yield put({type: types.SET_DEFAULT_CARD});
        }
    } catch (e) {
        yield put({type: types.READY});
    }
}

function* requestFullScreen() {
    try {
        // html要素を取得
        const rootElement = document.documentElement;

        // メソッドを統一 (本実装されてないブラウザが多い)
        rootElement.requestFullscreen = rootElement.requestFullscreen || rootElement.mozRequestFullScreen || rootElement.webkitRequestFullscreen || rootElement.msRequestFullscreen;

        // メソッドを実行
        rootElement.requestFullscreen();
        document.body.webkitRequestFullScreen();
        yield put({type: types.REQUEST_FULL_SCREEN_EXECUTE});
    } catch (e) {
        yield put({type: types.CHANGE_SCREEN_FAILED, message: 'cannot change screen'});
    }
}

function* cancelFullScreen() {
    try {
        // メソッドを統一 (本実装されてないブラウザが多い)
        document.exitFullscreen = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.webkitCancelFullScreen || document.msExitFullscreen;

        // メソッドを実行
        document.exitFullscreen();
        yield put({type: types.CANCEL_FULL_SCREEN_EXECUTE});
    } catch (e) {
        yield put({type: types.CHANGE_SCREEN_FAILED, message: 'cannot change screen'});
    }
}

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
    yield takeEvery(types.REQUEST_FULL_SCREEN, requestFullScreen);
    yield takeEvery(types.CANCEL_FULL_SCREEN, cancelFullScreen);
}

export default mySaga;
