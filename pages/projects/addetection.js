import styled from "styled-components";
import Card from "../../components/card.component";

const Main = styled.main`
  height: 97vh;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: auto;
  }
`;

export default function AdDetection() {
  return (
    <>
      <Main>
        <Card
          title="Ad detection"
          underline="(look at the green text in the top right corner)"
          texts={[
            "Let´s be honest, commercialbreaks on television are way too long. I don’t watch a lot of linear tv but when I do it always surprises me how long and loud they still are.",
            "The goal of this project is to make a system that detects when the commercial break starts and ends. When it does it mutes the audio channel and starts playing Spotify",
          ]}
          video="/img/detection.mp4"
        />
        <Card
          texts={[
            "My strategy was pretty simple. When a tvshow is airing, the logo of the broadcasting channel is always shown in one of the corners. When the commercial break starts the logo disappears.",
            "So when I detect a logo, I can detect the show and vice versa.",
            "So I needed my own logo detection software. I trained a neural networks so I figured I’d try that.",
          ]}
          src="/img/dataset.jpg"
        />
        <Card
          texts={[
            "First thing was getting a video stream on my pc using IPTV.",
            "I used python and Opencv to get the images saved on my computer and categorised them commercial/program.",
            "With the dataset done I stared watching tutorials on how to create a neural network. I used pytorch and TensorFlow.",
            " After a lot of tinkering and rewatching tutorials I finally got it working and with an accuracy score of 98%.",
          ]}
          src="/img/neuralnet.jpg"
        />
      </Main>
    </>
  );
}
