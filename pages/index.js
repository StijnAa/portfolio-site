import styled from "styled-components";
import Card from "../components/card.component";

const Main = styled.main`
    height: 97vh;
    @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
        height: auto;
    }
`;

export default function Home() {
    return (
        <Main>
            <Card
                title="Hi, I'm Stijn Aa"
                texts={["Welcome to my spot on the web.", "Feel free to poke around and check out my projects. Enjoy!"]}
                src="/img/IMG_3696_4x4.jpg"
            />
        </Main>
    );
}
