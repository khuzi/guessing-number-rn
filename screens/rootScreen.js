import React, { useContext } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

import { StartGameScreen } from "./startGameScreen";
import { GameOver } from "./gameOver";
import { GameScreen } from "./gameScreem";
import { Hedaer } from "../components";
import context from "../context/context";

export function RootScreen() {
  const { state } = useContext(context);

  let content = <StartGameScreen />;
  if (state.userNumber && state.rounds <= 0 && state.startGame) {
    content = <GameScreen />;
  } else if (state.rounds > 0) {
    content = <GameOver />;
  }
  return (
    <SafeAreaView style={styles.screen}>
      <Hedaer title="Guess a Number" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
