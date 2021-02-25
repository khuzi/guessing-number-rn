import { createContext } from "react";

export default createContext({
  userNumber: null,
  rounds: 0,
  startGame: false,
  allGuesses: [],
});
