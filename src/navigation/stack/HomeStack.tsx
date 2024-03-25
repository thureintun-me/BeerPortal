import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "screens";
import { HOME_SCREEN } from "screens/types";

const Stack = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name={HOME_SCREEN} />
    </Stack.Navigator>
  );
};

export default HomeStack;
