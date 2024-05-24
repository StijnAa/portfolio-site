import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const PageOut = ({ children }) => {
    const variants = {
        out: {
            opacity: 0,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    const { asPath } = useRouter();

    return (
        <AnimatePresence initial={false} exitBeforeEnter={true}>
            <motion.div key={asPath} variants={variants} exit="out">
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageOut;
