import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { HomeStackScreenProps } from "navigation/types";

const Bar = ({ navigation, route }: HomeStackScreenProps<"Bar">) => {
  const navigate = () =>
    navigation.navigate("BarDetails", {
      barId: "1",
    });
  return (
    <View className="flex flex-1 justify-center items-center">
      <View className="flex flex-1 justify-center items-center bg-red-300">
        <Text className="text-3xl">Hello</Text>
        <TouchableOpacity onPress={navigate}>
          <Text className="text-3xl">Navigate to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bar;
