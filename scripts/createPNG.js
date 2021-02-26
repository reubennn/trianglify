import trianglify from "trianglify";
import { createWriteStream } from "fs";

const IMAGES_TO_GENERATE = 100;
const CELL_SIZE_MIN = 30;
const CELL_SIZE_MAX = 100;
const VARIANCE_SIZE_MIN = 0.6;
const VARIANCE_SIZE_MAX = 1;

for (let i = 0; i < IMAGES_TO_GENERATE; i++) {
    const canvas = trianglify({
        width: 1920,
        height: 1080,
        cellSize: (Math.random() *
            (CELL_SIZE_MAX - CELL_SIZE_MIN + 1) + CELL_SIZE_MIN),
        variance: Math.random() *
            (VARIANCE_SIZE_MAX - VARIANCE_SIZE_MIN) + VARIANCE_SIZE_MIN,
        seed: null,
        xColors: "random",
        yColors: "random",
        colorSpace: "lab",
        colorFunction: trianglify.colorFunctions.interpolateLinear(0.5),
    }).toCanvas();

    const file = createWriteStream(`images/trianglify${i + 1}.svg`);
    canvas.createPNGStream().pipe(file);
};
