/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class TypeScriptReactNativeStarter extends React.Component<
  object,
  object
> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{"\n"}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    flex: 1,
    justifyContent: "center"
  },
  instructions: {
    color: "#333333",
    marginBottom: 5,
    textAlign: "center"
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center"
  }
});

AppRegistry.registerComponent(
  "TypeScriptReactNativeStarter",
  () => TypeScriptReactNativeStarter
);
