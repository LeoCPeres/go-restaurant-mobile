import {
  Container,
  FavoriteButton,
  ScreenTitle,
  SignOutButton,
} from "./styles";
import { Text } from "react-native";

import LogoGoRestaurant from "../../assets/logo.svg";
import { useNavigationState } from "@react-navigation/native";

import { LogOut, ArrowLeft, Heart } from "react-native-feather";
import { useTheme } from "styled-components";

export function HeaderBar() {
  const navigationState = useNavigationState((state) => state);
  const currentRoute = navigationState?.routes[navigationState.index];
  const currentScreen = currentRoute?.name;

  const theme = useTheme();

  if (!currentScreen || currentScreen === "list") {
    return (
      <Container>
        <LogoGoRestaurant />

        <SignOutButton>
          <LogOut color={theme.colors.yellow} />
        </SignOutButton>
      </Container>
    );
  }

  return (
    <Container>
      <ArrowLeft color={theme.colors.yellow} />

      <ScreenTitle>
        {currentScreen === "orders" && "Meus pedidos"}
        {currentScreen === "favorites" && "Meus favoritos"}
      </ScreenTitle>

      <FavoriteButton>
        {currentScreen === "pratos" && <Heart color={theme.colors.yellow} />}
      </FavoriteButton>
    </Container>
  );
}
