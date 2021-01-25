import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '..//src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

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
    return (
        <QuizBackground backgroundImage={db.bg}>
            <Head>
                <title>{db.title} </title>
                <meta property="og:image" content={db.bg} key="title" />
            </Head>
            <QuizContainer>
                <QuizLogo backgroundImage={db.bg} />
                <Widget>
                    <Widget.Header>
                        <h1>{db.title} </h1>
                    </Widget.Header>
                    <Widget.Content>
                        <p>{db.description} </p>
                        <Widget.Input  placeholder="Diz ai seu nome para jogar 🚀."/>
                        <Widget.Button/>
                    </Widget.Content>
                </Widget>
                <Footer />
            </QuizContainer>
            <GitHubCorner projectUrl="https://github.com/cristopherpds/lol-quiz" />
        </QuizBackground>
    );
}