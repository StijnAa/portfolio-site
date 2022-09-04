import styled from "styled-components";
import Card from "../components/card.component";

const Main = styled.main`
  height: 97vh;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
  }
`;

export default function About() {
  return (
    <>
      <Main>
        <Card
          title="About"
          texts={[
            "My name is Stijn Aa, I'm a front-end developer living in Utrecht - The Netherlands. ",
            "If you would like to get in touch with me, you can always mail me at stijnaa@gmail.com",
          ]}
          src="/img/IMG_3696_4x4.jpg"
        />
        <Card
          texts={[
            "I am currently working at Capgemini on a project for the Dutch ministry of general affairs.",
            "I've started my carrier as a freelance motion designer during my study. After getting my bachelor of design (2020) studing Image and media technologies at the HKU in Utrecht, I've retrained to become a front-end developer.",
            "As a HKU graduate and developer, I have a broad technical skill set and a good understanding of creative problem-solving. I like getting to the core of a concept or problem by asking questions and trying (new) things.",
          ]}
        />
        <Card
          texts={[
            "In my spare time I also like to build new things. As a kid I learned how to build a computer from my dad and as a teenager have built a collection of drones.",
            "For my last project, I bought a boat to restore with my dad. It is now finished and laying in the canals of Utrecht. The next project is probably going to be an electrification of a Vespa Classic",
          ]}
        />
      </Main>
    </>
  );
}
