import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackParamList } from "navigation/types";
import React from "react";
import { BarScreen, HomeScreen } from "screens";
import BarDetails from "screens/bar/BarDetails";

const Stack = createStackNavigator<HomeStackParamList>();
const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen component={HomeScreen} name={"Home"} />
      <Stack.Screen component={BarScreen} name={"Bar"} />
      <Stack.Screen
        component={BarDetails}
        name={"BarDetails"}
        initialParams={{
          barId: "0",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
