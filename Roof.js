class Bob {

    constructor(x,y,r){

        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            slop: 1,
            density:3
        }
        this.image=loadImage("ball.png");
        this.r = r;
        this.body = Bodies.circle(x,y,r,options);
        this.color = color(random(100,255),random(100,255),random(100,255));
        World.add(world,this.body);
  
    }

    display(){

        var pos = this.body.position;

        push();
        imageMode(CENTER)
        this.scale=1;
        ellipseMode(RADIUS);
        fill (this.color);
        noStroke();
        ellipse(pos.x,pos.y,50,50);
        pop();

    }

}