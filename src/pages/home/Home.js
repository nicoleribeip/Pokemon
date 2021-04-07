import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import Card from "../../components/Card/Card";

function Home() {
  //Aqui são os estados que a gente usa pra controlar toda a aplicação
  //É como se fossem as variaveis só que a gente precisa usar o set pra dar valor
  const [pokes, setPokes] = useState([]);

  //Eu faço função dessa forma mas da pra fazer tipo function getAllPokes(){}
  //Mas prefiro essa aqui.

  const getAllPokes = async () => {
    try {
      //O fetch é próprio do JS e permite a gente a fazer requisição em API
      //Se você colocar essa URL no chrome, da pra ver o resultado.
      //Mas só da pra ver no navegador porque é um GET
      let res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0"
      );
      //Aqui a gente converte o que vem da API em JSON
      let resJSON = await res.json();
      //Se olhar no navegador a gente tem um objeto e dentro dele
      //temos o atributo results que contem os dados

      //O setPokes é pra salvar o resultado dentro da nossa variavel pokes
      //que ta criada ali em cima.
      setPokes(resJSON.results);
      console.log(resJSON.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllPokes();
  }, []);

  return (
    <Container>
      {pokes &&
        pokes.map((cleitin, index) => (
          <Card id={index} nomePokemon={cleitin.name} />
        ))}
    </Container>
  );
}

export default Home;
