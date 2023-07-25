import styled from "styled-components/native";

interface StyledCardProps {
  isSelected?: boolean;
}

export const Card = styled.TouchableOpacity<StyledCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 25px;

  height: 128px;
  width: 128px;

  margin-right: 16px;

  border-radius: 8px;
  background-color: #e7e7eb;

  ${(props) =>
    props.isSelected &&
    "border-color: #c72828; border-width: 2px; color: #c72828;"}
`;

export const CardTitle = styled.Text<StyledCardProps>`
  font-family: "Poppins_600SemiBold";
  font-size: 15px;

  ${(props) => props.isSelected && "color: #c72828;"}/* line-height: 16px; */
`;
