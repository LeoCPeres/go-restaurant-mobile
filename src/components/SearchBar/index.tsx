import { View } from "react-native";
import { Container, SearchBarView, SearchInput } from "./styles";

import { Search } from "react-native-feather";
import { useTheme } from "styled-components";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (search: string) => void;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const theme = useTheme();

  const [search, setSearch] = useState("");

  return (
    <Container>
      <SearchBarView>
        <Search color={theme.colors.texts} />
        <SearchInput
          placeholder="Qual comida você procura?"
          onChangeText={(e) => onSearch(e)}
        />
      </SearchBarView>
    </Container>
  );
}
