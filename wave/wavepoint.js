export class WavePoint{
	constructor(x, y, offset, speed, amp){
		this.x = x;
		this.y = y;
		this.fixedy = y;
		this.cur = offset;
		this.speed = speed;
		this.amp = amp;
	}

	update(){
		this.cur += this.speed;
		if(this.cur > Math.PI * 2) this.cur -= Math.PI * 2; //cur이 너무 커지는 것 방지
		this.y = this.fixedy + (Math.sin(this.cur) * this.amp);
	}
}