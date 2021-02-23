import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export function GameOver({ roundsNumber, userNumber, onNewGameHandler }) {
  return (
    <View style={styles.screen}>
      <Text>The Game is over...!</Text>
      <Text>Number of rounds: {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title="NEW GAME" onPress={onNewGameHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
