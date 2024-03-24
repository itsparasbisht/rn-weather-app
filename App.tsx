import React, { useState, useEffect } from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import { useLocation } from "./hooks/useLocation";

export default function App() {
  const { location, errorMsg } = useLocation();

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={styles.paragraph}>{errorMsg}</Text>
      ) : (
        <Text style={styles.paragraph}>
          {JSON.stringify(location, undefined, 2)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
