import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
  height: 97vh;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
  }
`;

export default function Overhoorbot() {
  return (
    <>
      <Main>
        <Card
          title="Overhoorbot"
          link="https://www.youtube.com/watch?v=ZJFeEkQPba8"
          linkText="A google home app to help kids study for tests"
          texts={[
            "For the final project of the web development minor I followed at the Hogeschool van Amsterdam I worked on a projected called overhoorbot. With this project we wanted to make a app for the Google home systems that could help kids learn.",
          ]}
          src="/img/overhoorbot1.png"
        />
        <Card
          texts={[
            "To get a list with questions playing, you can create a new list on the website. This list gets a number and if you tell the Google home the number it starts the quiz. ",
            " We added two modes. One where every question is asked once, and a mode where questions you answer false get asked again at the end.",
          ]}
          src="/img/overhoorbot2.png"
        />
        <Card
          texts={[
            "We really liked the idea of this app, but the Google home was in its current form not good enough for this to work properly.",
            "This was because it can't switch language between responses. It for example would say “het goede antwoord is: bike lane”, Pronouncing bike lane in a very Dutch way and teaching it wrong.",
          ]}
          src="/img/pug.png"
        />
      </Main>
    </>
  );
}
