import { View, Text } from "react-native";
import { Container } from "./styles";
import { SearchBar } from "../../components/SearchBar";

export default function FoodList() {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
}
