import { FlatList } from "react-native";
import { CategoryProps } from "../../@types/CategoryProps";
import { CategoryCard } from "../CategoryCard";
import { Container } from "./styles";

export function CategoriesList() {
  const categories = [
    { id: "1", name: "Massas", image: "Massas" },
    { id: "2", name: "Pizzas", image: "Pizzas" },
    { id: "3", name: "Carnes", image: "Carnes" },
  ];

  return (
    <Container>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryCard category={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
