import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Hedaer } from "./components";
import { StartGameScreen } from "./screens";
import GlobalState from "./context/globalState";

export default function App() {
  return (
    <GlobalState>
      <View style={styles.screen}>
        <Hedaer title="Guess a Number" />
        <StartGameScreen />
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
