import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
  height: 97vh;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
  }
`;

export default function SocialCineville() {
  return (
    <>
      <Main>
        <Card
          title="Movie Planner"
          link="https://movie-planner.vercel.app/"
          linkText="link"
          texts={[
            "Movie Planner is a web app that makes it easy to see what movies your friends want to go to. The main feature is a timeline that shows all the current and upcoming movies.",
            "Right next to each movie, you can see which of your friends want to go. This makes it super simple to figure out who wants to see what.",
          ]}
          src="/img/movie-planner.jpg"
        />
      </Main>
    </>
  );
}
