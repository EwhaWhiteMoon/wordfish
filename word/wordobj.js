export class WordObj{
	constructor(xRatio, yRatio, word, font, color, 
		update = () => {
			
		},
		draw = (ctx) => {
            this.update();

			ctx.font = this.font;
			ctx.filltext(this.word, this.x, this.y);
	}){
		this.xRatio = xRatio;
		this.yRatio = yRatio;
		this.word = word;
		this.font = font;
        this.color = color;
        this.update = update.bind(this);
		this.draw = draw.bind(this);
	}

    resize(stageWidth, stageHeight){
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.x = stageWidth * this.xRatio;
        this.y = stageHeight * this.yRatio; 
        //Update에서도 연산 진행해줘야함 꼭!
    }
}