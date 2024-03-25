import { View, Text } from "react-native";
import React from "react";
import { HomeStackScreenProps } from "navigation/types";

const BarDetails = ({
  navigation,
  route,
}: HomeStackScreenProps<"BarDetails">) => {
  const { barId } = route.params;

  return (
    <View>
      <Text>BarDetails - {barId}</Text>
    </View>
  );
};

export default BarDetails;
