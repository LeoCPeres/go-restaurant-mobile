import styled from "styled-components/native";

export const FoodCardContainer = styled.TouchableOpacity`
  width: 100%;
  height: 114px;
  border-radius: 8px;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 16px;
`;

export const ImageContainer = styled.Image`
  width: 114px;
  height: 100%;
  border-radius: 8px 0px 0px 8px;
`;

export const Content = styled.View`
  background-color: #e7e7eb;
  flex: 1;

  border-radius: 0px 8px 8px 0px;

  display: flex;
  justify-content: center;

  height: 100%;

  padding: 13px 16px;

  gap: 6px;
`;

export const Title = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 15px;
  color: #3d3d4d;
`;

export const Description = styled.Text`
  font-family: "Roboto_400Regular";
  font-size: 12px;
  color: #3d3d4d;
`;

export const Price = styled.Text`
  font-family: "Roboto_500Medium";
  font-size: 18px;
  color: #39b100;

  margin-top: 2px;
`;
