import {
  SET_USER_NUMBER,
  NEW_GAME,
  INCREASE_ROUNDS,
  SET_START_GAME,
  ADD_GUESS,
} from "./actions";

const addGuess = (guess, state) => {
  const updatedGuess = [...state.allGuesses];
  updatedGuess.push(guess);
  return { ...state, allGuesses: updatedGuess.reverse() };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER_NUMBER:
      return { ...state, userNumber: action.payload };
    case NEW_GAME:
      return {
        ...state,
        rounds: 0,
        userNumber: null,
        startGame: false,
        allGuesses: [],
      };
    case INCREASE_ROUNDS:
      return { ...state, rounds: action.payload };
    case SET_START_GAME:
      return { ...state, startGame: true };
    case ADD_GUESS:
      return addGuess(action.payload, state);
    default:
      return state;
  }
};
