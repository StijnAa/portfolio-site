import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
    height: 97vh;
    @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
        height: auto;
    }
`;

export default function opReis() {
    return (
        <Main>
            <Card
                title="Search through 3 op Reis"
                linkText="3opreiszoekmachine.nl/"
                link="https://www.3opreiszoekmachine.nl/"
                texts={[
                    "With the advent of GPT-3, I wanted to understand the basics of these new LLM-based technologies.",
                    "So, I started this project to learn the fundamentals of the technology behind large language models and gain some actual experience with the tech.",
                ]}
                src="/img/3opreiszoekmachine.jpg"
            />
            <Card
                texts={[
                    "On 3opreiszoekmachine.nl, you can search through hundreds of clips of the TV show '3 op reis' using context matching. ",
                    "So, if you, for instance, want to see scenes about mountain biking on a dangerous road, you can search for related clips.",
                ]}
                src="/img/preprompt.jpg"
            />
            <Card
                texts={[
                    "Now how did I make this.",
                    "First I downloaded all of the subtitles of the episodes of 3 op reis. After this, I told GPT-3 to subdivide them into scenes and output a JSON format. With these scenes, I then made the embeddings.",
                    "The last part is to make an embedding of the text input on the website and compare it to the scene embeddings. The result is orderd by best match",
                ]}
                src="/img/output.jpg"
            />
        </Main>
    );
}
