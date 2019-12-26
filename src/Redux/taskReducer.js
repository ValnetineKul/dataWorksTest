
export const TYPES = {
  SET_MONEY: 'SET_MONEY',
  START_POLLING: 'START_POLLING',
};

const initialState = {
  money: null,
  goalMoney: 15,
  isFinished: false
};

const progressBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_MONEY: {
      return {
        ...state,
        money: state.money + action.money,
      };
    }
    case TYPES.START_POLLING: {
      return state;
    }
    default:
      return state;
  }
};

export const startPollingAction = () => (
  {type: TYPES.START_POLLING}
);


export const setMoneyAction = (money) => {
  console.log('setMoneyAction');
  return(
  {type: TYPES.SET_MONEY, money}
  )
};

export default progressBarReducer;
