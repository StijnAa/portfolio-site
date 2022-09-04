import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
  height: 97vh;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
  }
`;

export default function Kabeltjesshop() {
  return (
    <>
      <Main>
        <Card
          title="Kabeltjesshop"
          link="https://kabelshop.herokuapp.com/"
          linkText="Single product concept store - Link"
          texts={[
            "€30,- for a charging cable that lasts 12 months is the worst. So I searched for a better cable and tried to make dedicated webshop for it.",
            "The concept was a webshop with no clutter. Eliminating everting I don’t like about today’s webshops. So no signing up, no coupons codes and also no visual clutter. The order flow consists of the bare minimum.",
            "Only 3 questions. How many cables, where to send them and what bank do you use.",
          ]}
          src="/img/kabelshopHomepage.png"
        />
        <Card
          texts={[
            "Using NodeJS as webserver and ejs as templating engine I created the webshop. As payment engine I successfully integrating stripe.",
            "I completed the webshop layout for desktop screens but failed converting it to mobile. I also stopped developing the backend fulfilment part of the webshop because I got distracted and didn’t know how to make a sql server.",
            "I still believe in the concept but I’m looking for a better use case.",
          ]}
          src="/img/kabelshopAmount.png"
        />
      </Main>
    </>
  );
}
