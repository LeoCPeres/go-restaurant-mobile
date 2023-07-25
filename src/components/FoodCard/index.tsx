import { FoodProps } from "../../@types/FoodProps";
import {
  Content,
  Description,
  FoodCardContainer,
  ImageContainer,
  Price,
  Title,
} from "./styles";

import { formatPrice } from "../../utils/format";

type FoodCardProps = {
  food: FoodProps;
};

export function FoodCard({ food }: FoodCardProps) {
  if (food.available === false) return <></>;

  return (
    <FoodCardContainer>
      <ImageContainer
        source={{
          uri: food.image,
        }}
      />

      <Content>
        <Title>{food.name}</Title>
        <Description>{food.description}</Description>
        <Price>{formatPrice(food.price)}</Price>
      </Content>
    </FoodCardContainer>
  );
}
