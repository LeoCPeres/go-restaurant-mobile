import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

import { List, ShoppingBag, Heart } from "react-native-feather";

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
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.texts,
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 88,
        },
      }}
    >
      <Screen
        name="list"
        component={FoodList}
        options={{
          title: "Listagem",
          tabBarLabelStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 12,
            lineHeight: 18,
          },

          tabBarIcon: ({ size, color }) => <List color={color} />,
        }}
      />
      <Screen
        name="orders"
        component={Orders}
        options={{
          title: "Pedidos",
          tabBarLabelStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 12,
            lineHeight: 18,
          },
          tabBarIcon: ({ size, color }) => <ShoppingBag color={color} />,
        }}
      />
      <Screen
        name="favorites"
        component={Favorites}
        options={{
          title: "Favoritos",
          tabBarLabelStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 12,
            lineHeight: 18,
          },
          tabBarIcon: ({ size, color }) => <Heart color={color} />,
        }}
      />
      <Screen
        name="start"
        component={Start}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
