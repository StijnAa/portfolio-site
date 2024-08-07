import { useRef } from "react";
import styled from "styled-components";
import { useButton } from "@react-aria/button";
import { motion, AnimatePresence } from "framer-motion";
import ComponentIn from "./transitions/componentIn.transition";

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
    button {
        width: 100px;
        height: 80px;
        text-align: left;
    }
`;

const MenuButton = (props) => {
    const ref = useRef();
    const { buttonProps } = useButton(props, ref);

    return (
        <ComponentIn>
            <ButtonContainer>
                <AnimatePresence initial={true}>
                    <button type="button" {...buttonProps} ref={ref}>
                        <motion.span
                            initial={{ letterSpacing: "8px" }}
                            whileTap={{
                                letterSpacing: "-2px",
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            transition={{ duration: 3 }}
                        >
                            /Aa
                        </motion.span>
                    </button>
                </AnimatePresence>
            </ButtonContainer>
        </ComponentIn>
    );
};

export default MenuButton;
