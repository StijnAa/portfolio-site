import React from "react";
import dynamic from "next/dynamic";

const Sketch = dynamic(
    () =>
        import("react-p5").then((mod) => {
            return mod.default;
        }),
    {
        ssr: false,
    },
);

const Grain = (props) => {
    const setup = (p5, canvasParentRef) => {
        p5.frameRate(24);
        if (canvasParentRef) {
            p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        }
    };

    const draw = (p5) => {
        const amount = 5000;
        const bgPosX_rand = Math.random() * amount;
        const bgPosY_rand = Math.random() * amount;
        const bgPosX = Math.floor(bgPosX_rand);
        const bgPosY = Math.floor(bgPosY_rand);
        const bgPos = `${bgPosX}px ${bgPosY}px`;

        if (props.texture && props.texture.current) {
            props.texture.current.style.backgroundPosition = bgPos;
        }
    };

    const windowResized = (p5) => {
        p5.setup();
        p5.redraw();
    };

    return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
export default Grain;
