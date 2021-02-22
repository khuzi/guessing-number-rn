import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { colors } from "../../../constants";

export function Hedaer({ title }) {
  return (
    <View style={styles.hedaer}>
      <Text style={styles.hedaerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hedaer: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  hedaerTitle: {
    color: "#000",
    fontSize: 18,
  },
});
