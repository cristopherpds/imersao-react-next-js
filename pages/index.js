import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

/* const BackgroundImage = styled.div`
background-image:url(${db.bg});
flex: 1;
background-size:cover;
`; */

export const QuizContainer = styled.div`
width:100%;
max-width:350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (min-width:500px){
  margin: auto;
  padding: 15px;
}
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <>
      <Head>
        <title>League Of Legends</title>
        <link rel="icon" href="icon.png" />

        <meta name="description" content={db.description} />

        <meta property="og:site_name" content="LOL Quiz" />

        <meta property="og:title" content={db.title} />
        <meta property="og:description" content={db.description} />

        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={db.title} />
        <meta name="twitter:description" content={db.description} />
        <meta name="twitter:image" content={db.bg} />
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo backgroundImage={db.bg} />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                console.log('Fazendo submit');
                router.push(`/quiz?name=${name}`);
              }}
              >
                <Widget.Input
                  // eslint-disable-next-line react/jsx-no-bind
                  onChange={function (infoDo) {
                    console.log(infoDo.target.value);
                    // name = infoDo.target.value;
                    setName(infoDo.target.value);
                  }}
                  placeholder="Digite seu nome"
                />
                <button type="submit" disabled={name.length === 0}>
                  Jogar
                  {name}
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quiz da galera</h1>
              <p>Ahhhh vamos ser amigos para sempre...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/cristopherpds/lol-quiz" />
      </QuizBackground>
    </>
  );
}
