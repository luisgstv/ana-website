import React from "react";

import TimeCounter from "../components/TimeCounter";
import Memory from "../components/Memory";
import PostItCarousel from "../components/PostItCarousel";
import LoveMenu from "../components/LoveMenu";
import LoveCounter from "../components/LoveCounter";

import scrapbookImg from "../assets/images/scrapbook.png";

const Home = () => {
  const memoryContent =
    "3 anos juntos cheio de amor, risadas e momentos inesquecíveis que vão ficar na minha mente pro resto da vida. Eu te amo muito, eu te amo mais do que tudo nesse mundo e meu amor por você nunca vai se acabar. Se eu pudesse eu te conheceria muito antes pra poder estar com você a mais tempo ainda. Você é a mulher mais linda e mais perfeita que já pisou nessa Terra. Eu só tenho olhos pra você e eu vou continuar só tendo olhos pra você pro resto da minha vida. Enquanto eu estiver respirando eu vou ser seu. Enquanto eu estiver vivendo eu vou estar lutando por você e pela gente. Eu nunca na minha vida vou desistir de você porque a minha vida só tem sentido quando estamos juntos. Você fez a minha vida ser melhor, ser mais divertida e principalmente ter um sentido. Eu amo você e amo ter você na minha vida, e eu faria de tudo ao meu alcance e fora dele também pra te ver feliz. Os anos estão passando e meu amor por você nunca, em momento nenhum, diminuiu nem um pinguinho, ele só cresce cada vez mais, e vai continuar assim. Meu amor, eu te amo muito. Muito obrigado por tudo que você já fez por mim, muito obrigado pela sua existência, muito obrigado por estar aqui hoje comigo. Você é muito importante pra mim, você é a coisa mais preciosa nesse mundo e eu quero cuidar de você pro resto da minha vida. Eu te amo muito! ❤️";
  return (
    <main className="main">
      <TimeCounter />

      <Memory
        memoryImg={scrapbookImg}
        memoryTitle={"Feliz 3 Anos!! ❤️"}
        memoryContent={memoryContent}
      />

      <PostItCarousel />

      <LoveMenu />

      <LoveCounter />
    </main>
  );
};

export default Home;
