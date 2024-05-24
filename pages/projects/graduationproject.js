import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
    height: 97vh;
    @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
        height: auto;
    }
`;

export default function GraduationProject() {
    return (
        <Main>
            <Card
                title="Lazy loading"
                underline="HKU Graduation project"
                texts={[
                    "For my graduation project I developed interesting installations centred around curiosity. This is my final installation with which I graduated. It’s about a tug of war between curiosity and wasting time.",
                ]}
                src="/img/IMG_7589_4x4.jpg"
            />
            <Card
                texts={[
                    "The installation accomplices this with a few elements. First there is the chair. The chair forces you to commit to the installation. You can’t just wait and watch without sitting down. When you sit down a scroll of Instagram like posts start rolling. This sets the expectation of an interesting experience.",
                    "The scroll slowlsy speeds up and after some time this interesting experience is gradually taken away from you. It does this by slowly mixing in ever more blanc images. From this point on the installation tests your willingness watch hypnotic blanc pages flash by, hoping for an interesting image.",
                ]}
                src="/img/lazyloading Img.jpg"
            />
        </Main>
    );
}
