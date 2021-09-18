class Blowermouth{
    constructor(x,y,w,h){
        var options={
            restitution:0.01,
            isStatic:true
        };
    this.blowermouth=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.blowermouth);
    }

    display(){
        rectMode(CENTER)
        var pos=this.blowermouth.position;
        push();
        translate(pos.x,pos.y);
        
        rect(0,0,this.w,this.h);
        pop();
    }
}