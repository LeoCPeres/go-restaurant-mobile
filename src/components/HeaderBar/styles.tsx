import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #c72828;

  width: 100%;
  height: 148px;

  padding-top: 40px;
  padding-right: 24px;
  padding-left: 24px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SignOutButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;

  transform: rotate(180deg);
`;

export const ScreenTitle = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const FavoriteButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 24px;
`;
