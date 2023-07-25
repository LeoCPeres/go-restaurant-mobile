import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #c72828;
  height: 28px;

  padding: 0 24px;
`;

export const SearchInput = styled.TextInput`
  font-family: "Roboto_400Regular";
  font-size: 15px;
  line-height: 18px;

  width: 100%;

  color: #6c6c80;

  &::placeholder {
    color: #b7b7cc;
  }
`;

export const SearchBarView = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;

  align-items: center;

  margin-bottom: -28px;

  background-color: #e7e7eb;
  height: 56px;
  border-radius: 8px;

  padding: 18px 16px;
`;
