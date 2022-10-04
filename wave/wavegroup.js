import {
    Wave
} from "./wave.js";

export class WaveGroup{
    constructor() {
        this.waves = [];

        this.waves[0] = new Wave(4, 0, 'rgba(235, 245, 255, 1)', 0.05, 0.025, 10);
        this.waves[1] = new Wave(7, 0, 'rgba(175, 220, 255, 0.3)', 0.2, 0.05, 20);
        this.waves[2] = new Wave(7, 1, 'rgba(175, 220, 255, 0.3)', 0.2, 0.025, 20);
        this.waves[3] = new Wave(7, 1, 'rgba(175, 210, 255, 0.4)', 0.6, 0.03, 10);
        this.waves[4] = new Wave(7, 1, 'rgba(175, 210, 255, 0.4)', 0.7, 0.04, 10);
        this.waves[5] = new Wave(4, 1, 'rgba(220, 190, 170, 1)', 0.9, 0.001, 40);
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