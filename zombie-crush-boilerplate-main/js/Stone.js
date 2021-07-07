class Stone{
    constructor(x,y,r){
      var options ={
        density :0.1,
        isStatic:true
      };
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position

      push();
      fill("white");
      ellipse(pos.x,pos.y,this.r);
      pop();
    }
}