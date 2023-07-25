import styled from "styled-components/native";

export const Card = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 25px;

  height: 128px;
  width: 128px;

  margin-right: 16px;

  border-radius: 8px;
  background-color: #e7e7eb;
`;

export const CardTitle = styled.Text`
  font-family: "Poppins_600SemiBold";
  font-size: 15px;

  /* line-height: 16px; */
`;
