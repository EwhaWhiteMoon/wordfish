import {
    Wave
} from "./wave.js";

export class WaveGroup{
    constructor() {
        this.waves = [];

        this.waves[0] = new Wave(4, 0, 'rgba(230, 230, 255, 1)', 0.05, 0.025, 10);
        this.waves[1] = new Wave(7, 0, 'rgba(160, 200, 255, 0.2)', 0.2, 0.05, 20);
        this.waves[2] = new Wave(7, 1, 'rgba(160, 200, 255, 0.2)', 0.2, 0.025, 20);
        this.waves[3] = new Wave(4, 1, 'rgba(225, 210, 210, 1)', 0.9, 0.001, 40);
    }

    resize(stageWidth, stageHeight){
        this.waves.forEach(wave => {
            wave.resize(stageWidth, stageHeight);
        });
    }

    draw(ctx){
        this.waves.forEach(wave => {
            wave.draw(ctx);
        });
    }
}