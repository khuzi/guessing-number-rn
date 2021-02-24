import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";

import { Content } from "./components";
import GlobalState from "./context/globalState";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoading, setDataLoading] = useState(false);

  if (!dataLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoading(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <GlobalState>
      <Content />
      <StatusBar style="auto" />
    </GlobalState>
  );
}
