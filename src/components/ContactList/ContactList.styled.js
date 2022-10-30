import styled from 'styled-components';

export const ListContact = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 10px;
  gap: 6px;
  width: 500px;
  text-align: center;
  list-style: none;
  margin: 0 auto;
`;

export const Button = styled.button`
  min-width: 80px;
  padding: 4px 12px;
  margin-top: 10px;
  margin-left: 20px;
  border: 1px solid #000;
  border-radius: 6px;
  text-transform: capitalize;
  cursor: pointer;
  :hover,
  :focus {
    background-color: yellow;
    color: black;
  }
`;
