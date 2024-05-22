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
    <>
      <Main>
        <Card
          title="Graduation experiment about curiosity"
          texts={[
            "Durring my graduation project I developed a couple of interesting installations centred around curiosity. This experiment was my favourite because of its simplicity and the funny reactions it produced.",
            "The premise: you always want to know what other people are looking at. So this installation takes advantages of that.",
          ]}
          video="/img/box.mp4"
        />
        <Card
          texts={[
            "The setup involves a cube with a webcam inside. And a screen on the wall. When you walk by you see a picture from someone looking inside the cube. Your curiosity will push you to look inside the cube and see what the person on the photo saw. But when you do, a photo is taken of your face and displayed on the screen confronting you with your action.",
            "Now your face is being used for attentions and it only go’s away if a new person is curious enough.",
          ]}
          src="/img/setup1.jpg"
        />
        <Card texts={[""]} src="/img/setup2.jpg" />
      </Main>
    </>
  );
}
