import { View } from "react-native";
import { Container, SearchBarView, SearchInput } from "./styles";

import { Search } from "react-native-feather";
import { useTheme } from "styled-components";

export function SearchBar() {
  const theme = useTheme();

  return (
    <Container>
      <SearchBarView>
        <Search color={theme.colors.texts} />
        <SearchInput placeholder="Qual comida você procura?" />
      </SearchBarView>
    </Container>
  );
}
