import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Hedaer } from "./components";
import { StartGameScreen, GameScreen, GameOver } from "./screens";
import GlobalState from "./context/globalState";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const newGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };
  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onNewGameHandler={newGameHandler}
      />
    );
  }
  return (
    <GlobalState>
      <View style={styles.screen}>
        <Hedaer title="Guess a Number" />
        {content}
        <StatusBar style="auto" />
      </View>
    </GlobalState>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
