import React, { useState, useRef, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NumberContainer, Card, MainButton } from "../components";
import { INCREASE_ROUNDS, ADD_GUESS } from "../context/actions";
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
  const initialGuess = generateRandomBetween(1, 100, state.userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === state.userNumber) {
      dispatch({ type: INCREASE_ROUNDS, payload: state.allGuesses.length });
    }
  }, [currentGuess]);

  useEffect(() => {
    dispatch({ type: ADD_GUESS, payload: currentGuess });
  }, []);

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
    dispatch({ type: ADD_GUESS, payload: nextNumber });
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
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {state.allGuesses.map((guess, i) => (
            <View style={styles.listItem} key={i}>
              <Text>#{state.allGuesses.length - i}</Text>
              <Text>{guess}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
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
  listContainer: {
    flex: 1,
    width: "80%",
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    flexDirection: "row",
    borderColor: "black",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    justifyContent: "space-between",
    width: "60%",
  },
});
