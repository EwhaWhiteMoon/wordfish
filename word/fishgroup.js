import {
    WordObj
} from './wordobj.js'

export class FishGroup{
    constructor(){
        this.fish = [];
        this.words = ["itohG", "さかな", "생선", "ΙΧΘΥΣ"];

        this.words.forEach((word, i) => {
            this.fish[i] = new WordObj(10, 0, word, "bold 20px san-serif", "rgba(80, 100, 170, 1)",
            function(){//update
                this.xRatio += 0.005;
                if(this.xRatio > 1){
                    this.xRatio = (Math.random() * -0.7) - 0.1;
                    this.yRatio = 0.9 - Math.random() * 0.4;
                }
                this.x = this.stageWidth * this.xRatio;
                this.y = this.stageHeight * this.yRatio;
            },
            function(ctx){//draw
                this.update();

                ctx.font = this.font;
                ctx.fillStyle = this.color;

                let letters = this.word.split('');

                letters.forEach((letter, i) => {
                    ctx.translate(
                        this.x + 20 * i,
                        this.y + Math.sin(this.xRatio * 20 + this.yRatio + i) * 10
                    );
                    ctx.rotate(0.5 * Math.cos(this.xRatio * 20 + this.yRatio + i));
                    ctx.fillText(letter, 0, 0);
                    ctx.setTransform(2, 0, 0, 2, 0, 0);
                });
            }
            )
        });
    }

    resize(stageHeight, stageWidth){
        this.fish.forEach(fish => {
            fish.resize(stageHeight, stageWidth);
        });
    }

    draw(ctx){
        this.fish.forEach(fish => {
            fish.draw(ctx);
        });
    }
}