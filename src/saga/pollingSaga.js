import { put, takeEvery } from 'redux-saga/effects'
import { delay, call } from "@redux-saga/core/effects";
import * as actions from "../Redux/taskReducer";
import {fetchMoneyFromBackend} from "../api/api";
import {TYPES} from "../Redux/taskReducer";


//const getMoney = state => state.money;

function* getMoneyAsync() {
  const money = yield call(fetchMoneyFromBackend);
  console.log(money.balance_usd);
  yield put(actions.setMoneyAction(money.balance_usd));
  let fullNumber = 0;

  while (fullNumber < 1) {
    fullNumber += 0.2;
    yield delay(2000);
    console.log(fullNumber);
  }
  yield put(actions.setMoneyAction(fullNumber));
}

export function* watchGetMoney(){
  yield takeEvery( TYPES.START_POLLING, getMoneyAsync);
  console.log('started', TYPES.START_POLLING)
}

let mockGetMoney = () => new Promise(
  resolve => setTimeout(() => resolve({balance_usd: 14}),
    1000
  ));
