import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
  height: 97vh;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
  }
`;

export default function Planter() {
  return (
    <>
      <Main>
        <Card
          title="Planter"
          linkText="Planter.nl"
          link="http://planter.stijnaa.nl"
          texts={[
            "Planter.nl is a website I'm building for a friend of mine. It's going to be a webshop where you can customize and order a planter for your garden, balcony or rooftop garden.",
            "Currtenly I'm working on the mobile layout.",
          ]}
          src="/img/planter.png"
        />
      </Main>
    </>
  );
}
