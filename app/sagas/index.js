import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../services';
import * as types from '../actions/types';

// ワーカー Saga: FETCH_CARD Action によって起動する
function* fetchCard() {
    console.log(types.FETCH_CARD);
    try {
        const card = yield call(Api.fetchCard);
        console.log(card);
        yield put({type: 'FETCH_CARD_SUCCESS', card: card});
    } catch (e) {
        yield put({type: 'CARD_FETCH_FAILED', message: e.message});
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
    yield takeEvery('FETCH_CARD', fetchCard);
}

// export default function* root() {
//     yield all([
//         fork(watchFetchCard),
//     ]);
// }

export default mySaga;
