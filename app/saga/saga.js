import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../api/';

// ワーカー Saga: FETCH_CARD Action によって起動する
function* fetchCard() {
    try {
        const card = yield call(Api.fetchCard);
        console.log(card);
        yield put({type: 'CARD_FETCH_SUCCEEDED', card: card});
    } catch (e) {
        yield put({type: 'CARD_FETCH_FAILED', message: e.message});
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
    yield takeEvery('FETCH_CARD', fetchCard);
}

export default mySaga;
