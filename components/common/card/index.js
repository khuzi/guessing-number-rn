import React from "react";
import { View, StyleSheet } from "react-native";

export function Card({ children, style }) {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "#fff",
    elevation: 10,
    padding: 20,
    borderRadius: 8,
  },
});
