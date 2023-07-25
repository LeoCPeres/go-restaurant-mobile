import { useState } from "react";
import { Image } from "react-native";

import { FoodProps } from "../../@types/FoodProps";
import { formatPrice } from "../../utils/format";

import {
  Content,
  Description,
  FoodCardContainer,
  ImageContainer,
  Price,
  Title,
} from "./styles";

type FoodCardProps = {
  food: FoodProps;
};

export function FoodCard({ food }: FoodCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (food.available === false) return <></>;

  return (
    <FoodCardContainer>
      <ImageContainer
        source={{
          uri: food.image,
        }}
        onLoad={() => setIsLoading(false)}
      />

      <Content>
        <Title>{food.name}</Title>
        <Description>{food.description}</Description>
        <Price>{formatPrice(food.price)}</Price>
      </Content>
    </FoodCardContainer>
  );
}
