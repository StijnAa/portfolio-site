import React, { useRef } from "react";
import { useLottie } from "lottie-react";
import dynamic from "next/dynamic";
import blinds from "../public/lottie/blinds.json";

const Blinds = () => {
    const options = {
        animationData: blinds,
        loop: true,
    };

    const { View } = useLottie(options);
    const blurRef = useRef(null);

    // Create linear gradient

    return (
        <div className="blinds">
            <svg width="100" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg" className="gradiant">
                <defs>
                    <linearGradient id="MyGradient">
                        <stop offset="5%" stopColor="#F60" />
                        <stop offset="95%" stopColor="#FF6" />
                    </linearGradient>
                </defs>

                <rect width="100" height="50" />
            </svg>

            <div
                ref={blurRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backdropFilter: "blur(10px)",
                    maskComposite: "exclude", // Use exclude to invert the mask
                    WebkitMaskComposite: "xor", // For Safari
                    zIndex: 10,
                }}
            />
            {View}
        </div>
    );
};

export default dynamic(() => Promise.resolve(Blinds), {
    ssr: false,
});
