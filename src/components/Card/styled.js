import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  width: 200px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 10px;
  border-radius: 10px;
  border-bottom: 5px solid #ed5564;
  `;

export const Corpo = styled.div`
  height: 180px;
  width: 200px;
  margin: 0;
  border-radius: 4px;
  background-color: #ed5564;
  display: flex;
  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(149, 157, 165) 0px 1px 2px;
`;

export const ImagemPersonagem = styled.img`
  height: 130px;
  width: 130px;
  margin-bottom: 40px;
`;

export const Icons = styled.img`
  height: 300px;
  width: 300px;
  margin-bottom: 10px;
`;

export const Nome = styled.h1`
  color: #383838;
  font-size: 16px;
  text-align: center;
  font-weight: 400;
  position: relative;
  bottom: 60px;
  line-height: 10px;
`;

export const Poktitle = styled.h1`
  font-weight: bolder;
  color: #383838;
  font-size: 16px;
  margin-top: 40px;
`;

export const NumIndex = styled.h2`
  position: relative;
  bottom: 70px;
  left: 10px;
  color: #ed5564;
  font-weight: bold;
  text-align: center;
  background-color: white;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  line-height: 50px;
  box-shadow: rgba(50, 50, 51, 0.3) 2px 2px 5px 2px;
  font-size: 20px;
`;

