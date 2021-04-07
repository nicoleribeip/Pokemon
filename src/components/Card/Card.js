import React from "react";
import { Nome, Container, Corpo, DivRoxa, ImagemPersonagem } from "./styled";

function Card({ id, nomePokemon }) {
  console.log(id);
  return (
    <Container>
      <Corpo>
        <ImagemPersonagem
          src={`https://pokeres.bastionbot.org/images/pokemon/${id + 1}.png`}
        ></ImagemPersonagem>
      </Corpo>
      <Nome>{nomePokemon}</Nome>
    </Container>
  );
}

export default Card;
