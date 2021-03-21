class SlingShot
{
    constructor(bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }

        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly()
    {
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }
}
    display()
    {
        if(this.sling.bodyA)
        {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("blue");
            line(pointA.x, pointA.y, pointB.x, pointB.y);

            pop();
        }
    }