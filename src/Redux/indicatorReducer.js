import update from 'react-addons-update';

export const TYPES = {
  SET_MONEY: 'SET_MONEY',
  START_POLLING: 'START_POLLING',
};

const initialState = {
  uglyTree: {
    "Name": "Table",
    "Children": [{
      "VerticalSpan": 1,
      "Color": "Orange",
      "Value": "1",
      "Children": [{
        "VerticalSpan": 1,
        "Color": "Green",
        "Value": "4",
        "Children": [{
          "VerticalSpan": 1,
          "Color": "Purple",
          "Value": "7",
          "Children": []
        }]
      },
        {
          "Children": [
            {"VerticalSpan": 1, "Color": "Purple", "Value": "8", "Children": []}
          ]
        }
      ]
    },
      {"VerticalSpan": 1, "Color": "Green", "Value": "5"},
      {"VerticalSpan": 1, "Color": "Orange", "Value": "2",
        "Children": [{"VerticalSpan": 2, "Color": "Green", "Value": "6", "Children": []}
        ]
      },
      {
        "VerticalSpan": 2,
        "Color": "Orange",
        "Value": "3",
        "Children": [
          {"VerticalSpan": 1, "Color": "Purple", "Value": "9", "Children": []},
          {"VerticalSpan": 1, "Color": "Purple", "Value": "10", "Children": []}
        ]
      }
    ]
  }
};
const newInitialState = () => update(initialState, {uglyTree: {Name: {$set: 'uglyTree'}}});
newInitialState();
console.log(newInitialState(), 'i0909090')
const tableReducer = (state = initialState, action) => {
  return state;
};


export default tableReducer;
