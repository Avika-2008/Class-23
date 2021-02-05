class Ball{
    constructor(x,y,width,height){
        var ball_options={
            restitution:1.0
            
          }
          ball=Bodies.circle(x,y,20,ball_options);
          this.width=width;
          this.height=height;
          World.add(world,ball);   
    }
    display(){
        var pos = this.body.position;
        fill("red");
         ellipseMode(RADIUS);  
        ellipse(pos.x,pos.y,this.width,this.height);
    }
}