import {
	WaveGroup
} from './wave/wavegroup.js';

import {
	FishGroup
} from './fish/fishgroup.js';

class App{
	constructor(){
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		document.body.appendChild(this.canvas);

		this.waveGroup = new WaveGroup();
		this.fishGroup = new FishGroup();

		window.addEventListener('resize', this.resize.bind(this), false);
		this.resize();

		requestAnimationFrame(this.animate.bind(this));
	}

	resize(){
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;

		this.canvas.width = this.stageWidth * 2;
		this.canvas.height = this.stageHeight * 2;

		this.ctx.scale(2, 2);

		this.waveGroup.resize(this.stageWidth, this.stageHeight);
		this.fishGroup.resize(this.stageWidth, this.stageHeight);
	}

	animate(timestamp){
		this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

		this.waveGroup.draw(this.ctx);
		this.fishGroup.draw(this.ctx);

		requestAnimationFrame(this.animate.bind(this));
	}
}

window.onload = () => {
	new App();
	console.log("Done!");
};
