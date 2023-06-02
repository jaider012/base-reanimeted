import { createStackNavigator } from "@react-navigation/stack";
import { Homelist, Loader, PanGesture } from "./components";
const Stack = createStackNavigator();

export const StackAnimation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Homelist} />
      <Stack.Screen name="loding" component={Loader} />
      <Stack.Screen name="PanGesture" component={PanGesture} />
    </Stack.Navigator>
  );
};
