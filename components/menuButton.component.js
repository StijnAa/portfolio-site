import React, { useState } from "react";
import styled from "styled-components";
import { useButton } from "@react-aria/button";
import { useRef } from "react";
import ComponentIn from "./transitions/componentIn.transition";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import theme from "../styles/theme";

const ButtonContainer = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-left: 70px;
  margin-top: 50px;
  z-index: 200;
  position: fixed;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    position: absolute;
    margin-left: 20px;
    margin-top: 50px;
  }
`;

const MenuButton = (props) => {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);

  return (
    <ComponentIn>
      <ButtonContainer>
        <AnimatePresence initial={true}>
          <motion.button
            {...buttonProps}
            ref={ref}
            initial={{ letterSpacing: "5px" }}
            whileTap={{
              letterSpacing: "-2px",
              transition: {
                duration: 0.05,
              },
            }}
            transition={{ duration: 3 }}
          >
            /Aa
          </motion.button>
        </AnimatePresence>
      </ButtonContainer>
    </ComponentIn>
  );
};

export default MenuButton;
