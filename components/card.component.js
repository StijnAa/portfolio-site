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
    text-align: center;
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
`;
const TextContainer = styled.div`
  width: 500px;
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
    }
    a {
      font-size: 20px;
      text-decoration-line: underline;
    }
  }
  article {
    p {
      font-size: 20px;
      font-weight: 300;
      &:not(:last-child) {
        padding-bottom: 10px;
      }
      padding-top: 10px;
    }
  }
`;
const StyledImage = styled(Image)``;

const Card = (props) => {
  return (
    <StyledCard>
      {props.src && (
        <FlexContainer>
          <ComponentIn distance={80}>
            <ImageContainer>
              <StyledImage
                src={props.src}
                alt="alt"
                width={imgHeight}
                height={imgHeight}
                layout="responsive"
              />
            </ImageContainer>
          </ComponentIn>
        </FlexContainer>
      )}
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
            <article>
              {props.texts.map((paragraph, i) => {
                return <p key={{ i }}>{paragraph}</p>;
              })}
            </article>
          </TextContainer>
        </ComponentIn>
      </FlexContainer>
    </StyledCard>
  );
};

export default Card;
