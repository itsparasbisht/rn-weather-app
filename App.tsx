import { PaperProvider } from "react-native-paper";
import { AppRegistry } from "react-native";
import { expo } from "./app.json";
import Home from "./screens/Home";

export default function App() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(expo.name, () => App);
