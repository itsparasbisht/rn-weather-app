import { PaperProvider } from "react-native-paper";
import {
  AppRegistry,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { expo } from "./app.json";
import Home from "./screens/Home";
import { NativeWindStyleSheet } from "nativewind";
import { useFonts } from "expo-font";

export default function App() {
  NativeWindStyleSheet.setOutput({
    default: "native",
  });

  const [fontsLoaded] = useFonts({
    "Poppins-Thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
  });

  return (
    <SafeAreaView style={styles.safeArea} className="flex-1">
      <PaperProvider>
        <Home />
      </PaperProvider>
    </SafeAreaView>
  );
}

AppRegistry.registerComponent(expo.name, () => App);

const styles = StyleSheet.create({
  safeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
