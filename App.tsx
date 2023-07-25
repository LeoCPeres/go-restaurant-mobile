import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts as useFontsPoppins,
} from "@expo-google-fonts/poppins";
import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from "@expo-google-fonts/roboto";
import { HeaderBar } from "./src/components/HeaderBar";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  const [fontsLoadedPoppins] = useFontsPoppins({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded || !fontsLoadedPoppins) {
    return;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />

      <NavigationContainer>
        <HeaderBar />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
