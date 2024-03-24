import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useLocation } from "../hooks/useLocation";

export default function Home() {
  const { location, errorMsg } = useLocation();

  if (location === undefined && errorMsg === "") {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator animating={true} color={MD2Colors.red800} />
      </View>
    );
  } else if (errorMsg) {
    return (
      <View>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-600 text-xl">
        {JSON.stringify(location, undefined, 2)}
      </Text>
    </View>
  );
}
