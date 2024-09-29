import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
    height: 97vh;
    @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
        height: auto;
    }
`;

export default function Ios() {
    return (
        <Main>
            <Card
                title="iOS App"
                texts={[
                    "Inspiration struck me, so I guess I have to learn SwiftUI now. Jokes aside, it's quite fun. I'm not going to pivot to becoming an iOS developer, but I really enjoy this project.",
                    "I'm building a wireless microphone app. That's all I will say about it for now.",
                ]}
                src="/img/ios-app.jpg"
            />
        </Main>
    );
}
