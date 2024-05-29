import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
    height: 97vh;
    @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
        height: auto;
    }
`;

export default function TshirtDesign() {
    return (
        <Main>
            <Card
                title="T-shirt design"
                texts={[
                    "I've always wanted to create my own t-shirt, so in the summer of 2023, I began designing my first shirt and a friend and I took a workshop on screenprinting.",
                    "This spring, I printed and sold 30 pieces.",
                ]}
                src="/img/tshirt-1.jpg"
            />
            <Card
                texts={[
                    "Since my last name is Aa, I thought it would be fun to create designs where the character ends by saying 'Aaaaaaaa…'",
                ]}
                src="/img/tshirt-2.jpg"
            />
        </Main>
    );
}
