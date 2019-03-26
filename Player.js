class Player {
	
	
	constructor(x, up, down){
		this.screenWidth = 800;
		this.screenHeight = 600;
		this.x = x;
		this.y = 50;
		this.speed = 15;
		
		this.up = up;
		this.down = down;
	}
	
	draw() {
		stroke(0);
		rect(this.x, this.y, 20, 150);
	}
	
	moveUp() {
		if (this.y >= 0) {
		this.y -= this.speed;
		draw();
		}
		
	}
	
	moveDown(e) {
		if (this.y + 150 <= this.screenHeight){
				this.y+= this.speed;
			draw();
		}

	}
	
	onkeydown(e) {
		var key = e.keyCode ? e.keyCode : e.which;
	
		if (key == this.up) {
			this.moveUp();
		} else if (key == this.down) {
			this.moveDown();
	}
	
}
	
}