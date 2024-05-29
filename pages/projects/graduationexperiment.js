import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
    height: 97vh;
    @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
        height: auto;
    }
`;

export default function GraduationExperiment() {
    return (
        <Main>
            <Card
                title="Graduation experiment about curiosity"
                texts={[
                    "During my graduation project, I made several experiments designed around curiosity. This installation quickly became my favorite due to its simplicity and the hilarious reactions it sparked.",
                    "The premise is simple: we all want to know what others are looking at. This installation cleverly takes advantage of that urge.",
                ]}
                video="/img/box.mp4"
            />
            <Card
                texts={[
                    "The setup features a cube with a hidden webcam inside and a screen mounted on the wall. As you walk by, you notice a picture of someone peeking into the cube. This sparks your curiosity, compelling you to look inside. The moment you do, the webcam captures your face, and your photo appears on the screen, confronting you with your action and by extend your curiousity.",
                    "Now, your face is on display, and it remains there until another curious passerby takes a look inside the cube, replacing your image with theirs.",
                    "Is like a combination of clickbait and hot potato :)",
                ]}
                src="/img/setup1.jpg"
            />
            <Card
                texts={["The tech stack behind this setup uses Python and the OpenCV facial recognition library"]}
                src="/img/setup2.jpg"
            />
        </Main>
    );
}
