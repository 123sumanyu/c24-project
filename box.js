class Box{
	constructor(x,y,width,height)
	{
	var options={
		restitution:0.3,
		density:1,
		friction:5
	}
		
		this.body=Bodies.rectangle(x,y,width, height, options);
        this.width=width;
        this.height=height;
		World.add(world, this.body);

	}
	display()
	{
			push()
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("blue");
			rect(0,0,this.width,this.height);

			pop()
	}

}