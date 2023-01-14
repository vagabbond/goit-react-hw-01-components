import styled from 'styled-components';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 280px;
  height: 60px;
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 16px;
  color: #010101;
  font-weight: 700;
`;

export const Status = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${p => (p.isOnline ? '#00ff00' : '#ff0000')};
`;
