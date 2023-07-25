import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";
import Start from "../screens/Start";
import FoodList from "../screens/FoodList";
import Orders from "../screens/Orders";
import Favorites from "../screens/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 88,
        },
      }}
    >
      <Screen
        name="list"
        component={FoodList}
        options={{ title: "Listagem" }}
      />
      <Screen name="orders" component={Orders} options={{ title: "Pedidos" }} />
      <Screen
        name="favorites"
        component={Favorites}
        options={{ title: "Favoritos" }}
      />
      <Screen
        name="start"
        component={Start}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
