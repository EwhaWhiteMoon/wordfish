import {
    WavePoint
} from './wavepoint.js'

export class Wave{
	constructor(totalPoints, offset, color, waveRatio, speed, amp){
		this.totalPoints = totalPoints;
		this.offset = offset;
		this.color = color;
		this.waveRatio = waveRatio; // as percent
		this.speed = speed;
		this.amp = amp;

		this.points = [];
	}

	resize(stageWidth, stageHeight){
		if(this.stageWidth == stageWidth &&
			this.stageHeight == stageHeight) return;
		
		this.stageWidth = stageWidth;
		this.stageHeight = stageHeight;
	
		this.waveHeight = stageHeight * this.waveRatio;
		this.pointGap = stageWidth / (this.totalPoints - 1);

		this.init();
	}

	init(){
		this.points = [];
		for(let i = 0; i < this.totalPoints; i++){
			this.points[i] = new WavePoint(
				this.pointGap * i,
				this.waveHeight,
				- i + this.offset,
				this.speed,
				this.amp
			);
		}
	}

	draw(ctx){
		ctx.beginPath();
		ctx.fillStyle = this.color;
		
		ctx.moveTo(this.points[0].x, this.points[0].y);

		this.points.forEach((point, i) => {
			point.update();
			if(i == 0) return;

			ctx.lineTo(point.x, point.y);
		});

		ctx.lineTo(this.stageWidth, this.stageHeight);
		ctx.lineTo(0, this.stageHeight);
		ctx.lineTo(this.points[0].x, this.points[0].y);
		
		ctx.fill();
		ctx.closePath();
	}
}