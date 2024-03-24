import { PaperProvider } from "react-native-paper";
import { AppRegistry, Text } from "react-native";
import { expo } from "./app.json";
import Home from "./screens/Home";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar backgroundColor="black" />
      <Home />
      <Text className="text-red-600">Home</Text>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);
