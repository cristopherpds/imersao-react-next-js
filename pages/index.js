import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

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
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <QuizLogo />
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
                <Input
                  name="userName"
                  onChange={(infoDo) => {
                    console.log(infoDo.target.value);
                    setName(infoDo.target.value);
                  }}
                  placeholder="Digite seu nome para jogar"
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`jogar ${name}`}
                </Button>
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
