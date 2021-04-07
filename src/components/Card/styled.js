import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 200px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 10px;
`;
export const Corpo = styled.div`
  height: 200px;
  width: 200px;
  margin: 0;
  border-radius: 4px;
  background-color: #cf9bf2;
  display: flex;
  border-bottom-left-radius: 80px;
  border-bottom-right-radius: 80px;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
`;

export const ImagemPersonagem = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 50px;
`;

export const Nome = styled.h1`
  color: #383838;
  font-size: 16px;
  text-align: center;
  font-weight: 500;
`;
