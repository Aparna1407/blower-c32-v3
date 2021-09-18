class Blower{
    constructor(x,y,w,h){
        var options={
            restitution:0.01,
            isStatic:true
        };
    this.blower=Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.blower);
    }

    display(){
        rectMode(CENTER)
        var pos=this.blower.position;
        push();
        translate(pos.x,pos.y);
       
        rect(0,0,this.w,this.h);
        pop();
    }
}