class Player {
	
	
	constructor(x, up, down, context){
		this.screenWidth = context.width;
		this.screenHeight = context.height;
		this.x = x;
		this.y = 50;
		this.speed = 15;
		
		this.up = up;
		this.down = down;
    this.movingUp = false;
		this.movingDown = false;
		this.width = 20;
		this.height = context.height/3;
	}
	
	draw() {
    stroke(0);
    if (this.movingUp == true) {
    	this.moveUp();
    } else if (this.movingDown == true) {
    	this.moveDown();
    }
		
		rect(this.x, this.y, this.width, this.height);
	}
	
	moveUp() {
		if (this.y >= 0) {
		this.y -= this.speed;
		}
		
	}
	
	moveDown(e) {
		if (this.y + this.height <= this.screenHeight){
				this.y+= this.speed;
		}

	}
	
	onkeydown(e) {
		var key = e.keyCode ? e.keyCode : e.which;
	
		if (key == this.up) {
      this.movingUp = true;
			this.moveUp();
		} else if (key == this.down) {
      this.movingDown = true;
			this.moveDown();
	}
	
}
  
  onkeyup(e) {
  	var key = e.keyCode ? e.keyCode : e.which;
	
		if (key == this.up) {
      this.movingUp = false;
			this.moveUp();
		} else if (key == this.down) {
      this.movingDown = false;
			this.moveDown();
	}
  }
	
}