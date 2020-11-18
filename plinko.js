class Plinko
{
	constructor(x,y)
	{
		var options={
			isStatic:true
		}
		this.x=x;
		this.y=y;
		
		this.body=Bodies.circle(this.x, this.y, 10, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var plinkopos=this.body.position;		

			push()
			translate(plinkopos.x, plinkopos.y);
			ellipseMode(RADIUS)
			
			fill("white");
			ellipse(0,0,10, 10);
			pop()
			
	}

}