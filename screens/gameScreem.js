import React, { useState, useRef, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NumberContainer, Card, MainButton } from "../components";
import { INCREASE_ROUNDS } from "../context/actions";
import context from "../context/context";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

export function GameScreen() {
  const { state, dispatch } = useContext(context);
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, state.userNumber)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  useEffect(() => {
    if (currentGuess === state.userNumber) {
      dispatch({ type: INCREASE_ROUNDS, payload: rounds });
    }
  }, [currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < state.userNumber) ||
      (direction === "greater" && currentGuess > state.userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this wrong...!", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds((currRounds) => currRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          txt={<Ionicons name="md-remove" size={24} color="white" />}
          onPress={nextGuessHandler.bind(this, "lower")}
        />
        <MainButton
          txt={<Ionicons name="md-add" size={24} color="white" />}
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    width: 400,
    maxWidth: "90%",
  },
});
