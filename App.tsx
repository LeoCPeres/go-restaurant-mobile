import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/styles/theme";
import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />

      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
