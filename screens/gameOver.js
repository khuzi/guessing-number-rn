import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import { MainButton } from "../components";
import { NEW_GAME } from "../context/actions";
import context from "../context/context";
import { globalStyles } from "../constants";

const { bodyText, titleText } = globalStyles;

export function GameOver() {
  const { state, dispatch } = useContext(context);
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={titleText}>The Game is over...!</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/success.png.png")}
            style={styles.image}
          />
        </View>

        <Text style={bodyText}>Number of rounds: {state.rounds}</Text>
        <Text style={bodyText}>Number was: {state.userNumber}</Text>
        <View style={styles.btnContainer}>
          <MainButton
            txt="NEW GAME"
            onPress={() => dispatch({ type: NEW_GAME })}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btnContainer: {
    marginTop: 10,
  },
});
