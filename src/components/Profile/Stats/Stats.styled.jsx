import styled from 'styled-components';

export const StatsStyled = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  background-color: #fff;
  padding: 0;
  margin: 16px 0 0 0;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ItemStyled = styled.li`
  width: 33.33%;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const LabelStyled = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: grey;
`;
export const QuantityStyled = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: black;
`;
