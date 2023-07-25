import { Card, CardTitle } from "./styles";

import Pizzas from "../../assets/categories/pizzas.svg";
import Massas from "../../assets/categories/massas.svg";
import Carnes from "../../assets/categories/carnes.svg";

import { CategoryProps } from "../../@types/CategoryProps";
import { useEffect, useMemo, useState } from "react";

type CategoryCardProps = {
  category: CategoryProps;
  isSelected: boolean;
  onPressCategory: (id: string) => void;
};

const whichCategoryImage = (categoryName: string) => {
  switch (categoryName) {
    case "Pizzas":
      return <Pizzas />;
    case "Massas":
      return <Massas />;
    case "Carnes":
      return <Carnes />;
    default:
      return <Pizzas />;
  }
};

export function CategoryCard({
  category,
  onPressCategory,
  isSelected,
}: CategoryCardProps) {
  function handlePress() {
    // if (!isSelected) {
    //   onPressCategory("");
    // }

    onPressCategory(category.id);
  }

  return (
    <Card onPress={handlePress} isSelected={isSelected}>
      {whichCategoryImage(category.name)}

      <CardTitle isSelected={isSelected}>{category.name}</CardTitle>
    </Card>
  );
}
