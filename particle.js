class Particle
{
	constructor(x,y)
	{
		var options={
            isStatic:false
        }
		this.x=x;
		this.y=y;
		
        this.body=Bodies.circle(this.x, this.y, 10, options)
        this.color = color(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);

	}
	display()
	{
			
			var particlepos=this.body.position;		

			push()
			translate(particlepos.x, particlepos.y);
			ellipseMode(RADIUS)
           fill (this.color);
			
			ellipse(0,0,10, 10);
			pop()
			
	}
}