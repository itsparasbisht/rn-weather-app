import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";
import { useLocation } from "../hooks/useLocation";

const locationIcon = require("../assets/location.jpg");

export default function Home() {
  const { location, errorMsg } = useLocation();
  const apiKey = process.env.EXPO_PUBLIC_WEATHER_API_KEY;

  async function getWeatherDetails() {
    try {
      let res = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location?.lat},${location?.lng}&apikey=${apiKey}&units=metric`
      );
      res = await res.json();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (location) {
      getWeatherDetails();
    }
  }, [location]);

  if (location === undefined && errorMsg === "") {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator
          animating={true}
          className="text-blue-700"
          size={"large"}
        />
      </View>
    );
  } else if (errorMsg) {
    return (
      <View className="flex-1 items-center justify-center bg-white -mt-10">
        <Image source={locationIcon} className="w-40 h-40" />
        <Text className="text-base font-[Poppins-Medium] text-gray-700">
          {errorMsg}
        </Text>
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
