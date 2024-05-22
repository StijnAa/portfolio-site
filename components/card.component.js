import Image from "next/image";
import React from "react";
import styled from "styled-components";
import ComponentIn from "./transitions/componentIn.transition";

const imgHeight = 400;

const StyledCard = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 50px;
  width: 100%;
  height: 93vh;
  &:first-child {
    justify-content: right;
  }
  &:last-child {
    justify-content: left;
  }
  &:only-child {
    justify-content: center;
    text-align: left;
  }

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    margin: 20px 20px;
    padding: 20px;
    &:first-child {
      justify-content: center;
    }
    &:last-child {
      justify-content: center;
    }
  }
`;

const ImageContainer = styled.div`
  width: ${imgHeight}px;
  height: ${imgHeight}px;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: ${imgHeight * 0.8}px;
    height: ${imgHeight * 0.8}px;
  }
  box-shadow: 0px 5px 22px 0px rgb(0 0 0 / 5%);
  video {
    width: ${imgHeight}px;
    height: ${imgHeight}px;
    @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
      width: ${imgHeight * 0.8}px;
      height: ${imgHeight * 0.8}px;
    }
  }
`;
const TextContainer = styled.div`
  width: 500px;
  max-width: 700px;
  display: flex;
  height: 400px;
  flex-direction: column;
  justify-content: space-evenly;
  header {
    p {
      font-weight: 400;
    }
    h2 {
      font-weight: 700;
      font-size: 65px;
      word-wrap: break-word;
    }
    a {
      font-size: 20px;
      text-decoration-line: underline;
    }
  }
  article {
    p {
      font-size: 20px;
      line-height: 30px;
      font-weight: 300;
      &:not(:last-child) {
        padding-bottom: 10px;
      }
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: auto;
  }
`;
const StyledImage = styled(Image)``;

const Card = (props) => {
  return (
    <StyledCard>
      {props.src || props.video ? (
        <FlexContainer>
          <ComponentIn distance={80}>
            <ImageContainer>
              {props.src && (
                <StyledImage
                  src={props.src}
                  alt="alt"
                  width={imgHeight}
                  height={imgHeight}
                  layout="responsive"
                />
              )}
              {props.video && (
                <video
                  alt="alt"
                  width={imgHeight}
                  height={imgHeight}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                >
                  <source src={props.video} type="video/mp4" />
                </video>
              )}
            </ImageContainer>
          </ComponentIn>
        </FlexContainer>
      ) : (
        ""
      )}
      {((props.texts && props.texts.length > 0) || props.title) && (
        <FlexContainer>
          <ComponentIn distance={120}>
            <TextContainer>
              {props.title && (
                <header>
                  <h2>{props.title}</h2>
                  {props.link && <a href={props.link}>{props.linkText}</a>}
                  {props.underline && <p>{props.underline}</p>}
                </header>
              )}
              {props.texts && (
                <article>
                  {props.texts.map((paragraph, i) => {
                    return <p key={{ i }}>{paragraph}</p>;
                  })}
                </article>
              )}
            </TextContainer>
          </ComponentIn>
        </FlexContainer>
      )}
    </StyledCard>
  );
};

export default Card;
