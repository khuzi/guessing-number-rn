import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Hedaer } from "./components";
import { StartGameScreen, GameScreen } from "./screens";
import GlobalState from "./context/globalState";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGameScreen onStartGameHandler={startGameHandler} />;
  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
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
