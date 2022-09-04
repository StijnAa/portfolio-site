import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
  height: 97vh;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
  }
`;

export default function Rijksoverheid() {
  return (
    <>
      <Main>
        <Card
          title="Platform Rijksoverheid"
          texts={[
            "The Ministry of General Affairs’ Public Information and Communications Service (DPC) helps central government communicate with the public. ",
            "For the online communications, we are working with a platform which serves as the base for over 500 department or topic-based government websites.",
            "As a front-end developer, I'm part of the team that is responsible for the development of this platform.",
          ]}
          src="/img/rijksoverheid.jpg"
        />
        <Card
          texts={[
            "As part of the Helios team, I'm working on implementing new components and further developing the platform. ",
            "In addition, as part of the accessibility working group, I'm actively contributes to keeping the platform accessible for everyone.",
            ,
          ]}
          src="/img/ncsc.jpg"
        />
      </Main>
    </>
  );
}
