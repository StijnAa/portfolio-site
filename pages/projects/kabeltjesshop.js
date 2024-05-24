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
        <Main>
            <Card
                title="Kabeltjesshop"
                underline="Single product concept store"
                texts={[
                    "This concept was a webshop with no clutter. Eliminating everting I don’t like about today’s webshops.",
                    "No signing up, no coupons, no clutter.",
                    "Just 3 questions. How many cables, where to send them and what bank to use.",
                ]}
                src="/img/kabelshopHomepage.jpg"
            />
            <Card texts={[]} src="/img/kabelshopAmount.jpg" />
        </Main>
    );
}
