export class Fish{
	constructor(y, word, size, font, color){
		this.y = y;
		this.word = word;
		this.size = size;
		this.font = font;
        this.color = color;

		this.x = word.length * -20; // 생성 시 보이지 않도록

		console.log("new fish!");
	}

	update(speed){
		this.x += speed;
		return this.x;
	}

	draw(ctx){
        ctx.font = `bold ${this.size}px ${this.font}`;
        ctx.fillStyle = this.color;

        let letters = this.word.split('');
		
		letters.forEach((letter, i) => {
            ctx.translate(
                this.x + this.size / 3 * i,
        	    this.y + (Math.sin(this.x / 30 + i) / (i + 1))
                );
            ctx.rotate(0.5 * Math.cos(this.x / 30 + i) * 0.2 * letters.length / (i + 1));
            ctx.fillText(letter, 0, 0);
            ctx.setTransform(2, 0, 0, 2, 0, 0);
            });
	}
}