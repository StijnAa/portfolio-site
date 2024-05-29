import styled from "styled-components";
// import { usePreventScroll } from "react-aria";
import { motion } from "framer-motion";
import Link from "next/link";

const NavContainer = styled(motion.section)`
    position: fixed;
    background-color: white;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    nav {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 35px 10px 0 10px;
        ul {
            text-align: center;
        }

        li {
            margin-bottom: 16px;
        }
        a {
            font-weight: 400;
            font-size: 0.8rem;
        }
        h2 {
            font-weight: 500;
            font-size: 25px;
            margin-bottom: 15px;
        }
        li:last-child {
            margin-bottom: 40px;
        }
    }
`;

const Nav = () => {
    const variants = (listNr, itemNr) => {
        return {
            bgOut: {
                opacity: 0,
                transition: {
                    delay: 0.75,
                    duration: 0.75,
                },
            },
            bg: {
                opacity: 1,
                transition: {
                    duration: 0.2,
                    delay: 0,
                },
            },

            contentOut: {
                opacity: 0,
                transition: {
                    delay: 0,
                    duration: 0.2,
                },
            },

            itemStart: {
                opacity: 0,
                y: itemY(itemNr),
            },

            itemTween: {
                opacity: 1,
                y: 0,
                transition: {
                    opacity: {
                        duration: ListDelay(listNr) - itemDelay(itemNr),
                        delay: ListDelay(listNr) + itemDelay(itemNr),
                    },
                    y: {
                        duration: 0.5,
                        delay: ListDelay(listNr) + itemDelay(itemNr),
                    },
                },
            },
        };
    };

    const ListDelay = (i) => {
        return 0.3 + i * 0.25;
    };
    const itemDelay = (i) => {
        return i * 0.1;
    };
    const itemY = (i) => {
        return 10 + i * 10;
    };

    // usePreventScroll();
    return (
        <NavContainer variants={variants()} animate="bg" initial="bgOut" exit="bgOut">
            <nav>
                <motion.h2 variants={variants(0, 0)} animate="itemTween" initial="itemStart" exit="contentOut">
                    Menu
                </motion.h2>
                <ul>
                    <motion.li variants={variants(0, 1)} animate="itemTween" initial="itemStart" exit="contentOut">
                        <Link scroll={false} href="/about">
                            About
                        </Link>
                    </motion.li>
                </ul>

                <motion.h2 variants={variants(1, 0)} animate="itemTween" initial="itemStart" exit="contentOut">
                    Work
                </motion.h2>

                <ul>
                    <motion.li variants={variants(1, 1)} animate="itemTween" initial="itemStart" exit="contentOut">
                        <Link scroll={false} href="/projects/rijksoverheid">
                            Platform Rijksoverheid (2022)
                        </Link>
                    </motion.li>
                    <motion.li variants={variants(1, 2)} animate="itemTween" initial="itemStart" exit="contentOut">
                        <Link scroll={false} href="/projects/planter">
                            Planter (2022)
                        </Link>
                    </motion.li>

                </ul>
                    <motion.h2 variants={variants(2, 0)} animate="itemTween" initial="itemStart" exit="contentOut">
                        Hobby
                    </motion.h2>
                <ul>
                    <motion.li variants={variants(2, 1)} animate="itemTween" initial="itemStart" exit="contentOut">
                        <Link scroll={false} href="/projects/socialCineville">
                            Web - Social Cineville (2023)
                        </Link>
                    </motion.li>
                    <motion.li variants={variants(2, 2)} animate="itemTween" initial="itemStart" exit="contentOut">
                        <Link scroll={false} href="/projects/kabeltjesshop">
                            Web - Kabeltjesshop (2020)
                        </Link>
                    </motion.li>
                    <motion.li variants={variants(2, 3)} animate="itemTween" initial="itemStart" exit="contentOut">
                        <Link scroll={false} href="/projects/aaaaaaaaaa">
                           Design - T-shirt (2023)
                        </Link>
                    </motion.li>
                    <motion.li variants={variants(2, 4)} animate="itemTween" initial="itemStart" exit="contentOut">
                        <Link scroll={false} href="/projects/addetection">
                            ML - Ad detection on dutch Television (2021)
                        </Link>
                    </motion.li>
                    <motion.li variants={variants(2, 5)} animate="itemTween" initial="itemStart" exit="contentOut">
                        <Link scroll={false} href="/projects/graduationexperiment">
                            ML - Graduation Experiment (2019)
                        </Link>
                    </motion.li>
                </ul>
            </nav>
        </NavContainer>
    );
};

export default Nav;
