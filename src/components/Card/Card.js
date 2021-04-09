import React from "react";
import {
  Nome,
  Container,
  Corpo,
  ImagemPersonagem,
  NumIndex,
  Poktitle,
} from "./styled";

function Card({ id, nomePokemon }) {
  console.log(id);
  return (
    <Container>
      <Corpo>
        <ImagemPersonagem
          src={`https://pokeres.bastionbot.org/images/pokemon/${id + 1}.png`}
        ></ImagemPersonagem>
      </Corpo>
      <NumIndex>#{id}</NumIndex>
      <Nome>
        <Poktitle>Pokemon:</Poktitle>
        {nomePokemon}
      </Nome>
    </Container>
  );
}

export default Card;
