import {
    Fish
} from './fish.js'

export class FishGroup{
    constructor(){
        this.fish = [];
        this.words = ["물고오오기", "FISH"];

        /*
        this.words = this.words.map(s => 
            s.split("").reverse().join("")
        )
        */
    }

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth; 
        this.stageHeight = stageHeight;
    }

    update(){
        while(this.fish.length < 4){
            if(Math.random() < 0.01) continue;
            this.fish.push(new Fish(
                this.stageHeight * (1 - Math.random() * 0.8) + 0.2,
                this.words[Math.floor(Math.random() * this.words.length)],
                Math.floor(Math.random() * 20) + 50,
                'Hi Melody',
                "rgba(0, 0, 100, 1)"));
        }

        this.fish.forEach((fish, i) => {
            let x = fish.update(Math.floor(fish.size * i / 15) + 2);
            if(x > this.stageWidth){
                this.fish.splice(i, 1);
            }
        })
    }

    draw(ctx){
        this.update();
        this.fish.forEach(fish => {
            fish.draw(ctx);
        });
    }
}