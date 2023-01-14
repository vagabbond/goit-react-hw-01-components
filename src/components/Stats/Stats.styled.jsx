import styled from 'styled-components';

export const SectionStyled = styled.section`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #e4e4e4;
`;
export const TitleStyled = styled.h2`
  font-size: 32px;
  color: black;
  font-weight: 700;
`;
export const ListStyled = styled.ul`
  padding: 0;
  height: 50px;
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const ItemStyled = styled.li`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: red;
  padding: 7px;
  border: 1px solid #e4e4e4;
`;

export const LabelStyled = styled.span`
  font-size: 12px;
  color: white;
  margin-bottom: 5px;
`;
export const PercentageStyled = styled.span`
  font-size: 10px;
  color: white;
`;
