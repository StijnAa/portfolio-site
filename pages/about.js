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
        <Main>
            <Card
                title="About"
                texts={[
                    "My name is Stijn Aa, I'm a front-end developer living in Amsterdam.",
                    "If you would like to get in touch with me, you can always email me at stijnaa@gmail.com",
                ]}
                src="/img/IMG_3696_4x4.jpg"
            />
            <Card
                texts={[
                    "I am currently working at Capgemini on a project for the Dutch Ministry of General Affairs.",
                    "I began my career as a freelance motion designer. After earning my Bachelor of Design studing Image and Media Technologies at HKU in Utrecht in 2020, I retrained to become a front-end developer.",
                    "As an HKU graduate and developer, I possess a broad technical skill set and a strong understanding of design and creative problem-solving. I enjoy delving into the essence of a concept or problem by asking questions and experimenting with new approaches.",
                ]}
            />
            <Card
                texts={[
                    "In my spare time I also like to make things.",
                    "My most recent projects including restoring a boat with my dad, designing and screenprinting a T-shirt, setting up my home server on a raspberry pi and creating a herb garden on my balcony.",
                ]}
            />
        </Main>
    );
}
