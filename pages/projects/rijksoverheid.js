import styled from "styled-components";
import Card from "../../components/card.component";
import React from "react"

const Main = styled.main`
    height: 97vh;
    @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
        height: auto;
    }
`;

export default function Rijksoverheid() {
    return (
        <Main>
            <Card
                title="PRO"
                underline="Platform Rijksoverheid"
                texts={[
                    "The Ministry of General Affairs’ Public Information and Communications Service (DPC) helps government organisations communicate with the public. ",
                    "The PRO platform serves as the base for over 500 department or topic-based government websites.",
                    "As a front-end developer, I'm part of the team that is responsible for the development of this platform.",
                ]}
                src="/img/rijksoverheid.jpg"
            />
            <Card texts={["The last 2 years we have rebuild the platform from the ground up."]} src="/img/ncsc.jpg" />
        </Main>
    );
}
