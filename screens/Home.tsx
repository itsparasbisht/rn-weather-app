import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useLocation } from "../hooks/useLocation";

export default function Home() {
  const { location, errorMsg } = useLocation();

  if (location === undefined && errorMsg === "") {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    );
  } else if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {JSON.stringify(location, undefined, 2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
