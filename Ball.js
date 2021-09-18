class Ball{
    constructor(x,y,r){
        var options={
            restitution:0.01,
            isStatic:false
        };
    this.ball=Bodies.circle(x,y,r,options);
    this.r=r;
    
    World.add(world,this.ball);
    }

    display(){
        ellipseMode(RADIUS)
        var pos=this.ball.position;
        push();
        translate(pos.x,pos.y);
        
        ellipse(0,0,this.r,this.r);
        pop();
    }
}