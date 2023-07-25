import { Card, CardTitle } from "./styles";

import Pizzas from "../../assets/categories/pizzas.svg";
import Massas from "../../assets/categories/massas.svg";
import Carnes from "../../assets/categories/carnes.svg";

import { CategoryProps } from "../../@types/CategoryProps";

type CategoryCardProps = {
  category: CategoryProps;
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

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Card>
      {whichCategoryImage(category.name)}

      <CardTitle>{category.name}</CardTitle>
    </Card>
  );
}
