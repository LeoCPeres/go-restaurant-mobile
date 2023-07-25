import { FlatList } from "react-native";
import { CategoryProps } from "../../@types/CategoryProps";
import { CategoryCard } from "../CategoryCard";
import { Container } from "./styles";
import { useState } from "react";

type CategoriesListProps = {
  onPressCategory: (id: string) => void;
};

export function CategoriesList({ onPressCategory }: CategoriesListProps) {
  const categories = [
    { id: "1", name: "Massas", image: "Massas", isSelected: false },
    { id: "2", name: "Pizzas", image: "Pizzas", isSelected: false },
    { id: "3", name: "Carnes", image: "Carnes", isSelected: false },
  ];

  const [categoriesList, setCategoriesList] = useState(
    categories as CategoryProps[]
  );

  function handlePressCategory(id: string) {
    const updatedCategories = categoriesList.map((category) => {
      if (category.id === id) {
        if (category.isSelected) {
          category.isSelected = false;
        } else {
          category.isSelected = true;
        }
      } else {
        category.isSelected = false;
      }

      return category;
    });

    // console.log(updatedCategories);

    setCategoriesList(updatedCategories);

    if (!updatedCategories.find((x) => x.isSelected == true)) {
      onPressCategory("");
      return;
    }

    onPressCategory(id);
  }

  return (
    <Container>
      <FlatList
        data={categoriesList}
        renderItem={({ item }) => (
          <CategoryCard
            category={item}
            isSelected={item.isSelected ?? false}
            onPressCategory={(id) => handlePressCategory(id)}
          />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Container>
  );
}
