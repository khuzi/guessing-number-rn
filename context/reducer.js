import {
  SET_USER_NUMBER,
  NEW_GAME,
  INCREASE_ROUNDS,
  SET_START_GAME,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER_NUMBER:
      return { ...state, userNumber: action.payload };
    case NEW_GAME:
      return { ...state, rounds: 0, userNumber: null, startGame: false };
    case INCREASE_ROUNDS:
      return { ...state, rounds: action.payload };
    case SET_START_GAME:
      return { ...state, startGame: true };
    default:
      return state;
  }
};
