import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./stack/HomeStack";

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
