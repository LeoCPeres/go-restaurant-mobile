import { Container, ScrollableContainer, Title } from "./styles";
import { SearchBar } from "../../components/SearchBar";

import { ScrollView, Text } from "react-native";
import { CategoriesList } from "../../components/CategoriesList";

export default function FoodList() {
  return (
    <Container>
      <SearchBar />
      <ScrollableContainer>
        <Title>Categorias</Title>

        <CategoriesList />
      </ScrollableContainer>
    </Container>
  );
}
