import trianglify from "trianglify";
import { writeFileSync } from "fs";

const IMAGES_TO_GENERATE = 100;
const CELL_SIZE_MIN = 30;
const CELL_SIZE_MAX = 100;
const VARIANCE_SIZE_MIN = 0.6;
const VARIANCE_SIZE_MAX = 1;

for (let i = 0; i < IMAGES_TO_GENERATE; i++) {
    const svg = trianglify({
        width: 1280,
        height: 720,
        cellSize: (Math.random() *
            (CELL_SIZE_MAX - CELL_SIZE_MIN + 1) + CELL_SIZE_MIN),
        variance: Math.random() *
            (VARIANCE_SIZE_MAX - VARIANCE_SIZE_MIN) + VARIANCE_SIZE_MIN,
        seed: null,
        xColors: "random",
        yColors: "random",
        colorSpace: "lab",
        colorFunction: trianglify.colorFunctions.interpolateLinear(0.5),
    }).toSVG();

    writeFileSync(`images/trianglify${i + 1}.svg`, svg.toString());
}
