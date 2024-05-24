import React from "react";
import { Uniform } from "three";
import { Effect } from "postprocessing";

const fragmentShader = `
  uniform mat4 colorMatrix;

  void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec4 color = texture2D(inputBuffer, uv);
    outputColor = colorMatrix * color;
  }
`;

class ColorMatrixEffect extends Effect {
    constructor({ colorMatrix = [1, 1, 2, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] }) {
        super("ColorMatrixEffect", fragmentShader, {
            uniforms: new Map([["colorMatrix", new Uniform(new Float32Array(colorMatrix))]]),
        });
    }
}

const ColorMatrixEffectComponent = ({ colorMatrix }) => {
    React.useEffect(() => {
        new ColorMatrixEffect({ colorMatrix });
    }, [colorMatrix]);

    return null;
};

export default ColorMatrixEffectComponent;
