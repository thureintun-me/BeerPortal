import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import type { StackScreenProps } from "@react-navigation/stack";
import { HomeStackScreenProps } from "navigation/types";

const HomeScreen = ({ navigation, route }: HomeStackScreenProps<"Home">) => {
  const navigate = () => navigation.navigate("Bar");

  return (
    <View className="flex flex-1 justify-center items-center bg-red-300">
      <Text className="text-3xl">Hello</Text>
      <TouchableOpacity onPress={navigate}>
        <Text className="text-3xl">Navigate to Bar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
