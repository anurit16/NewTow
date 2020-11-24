class Bob {
    constructor(x,y,r){
        var option = { restitution : 1, 
            friction : 0, 
            
            density : 0.8 }

        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(x,y,r/2,option);
        this.image=loadImage("bob1.png");
        World.add(myWorld,this.body);
        
    }
    display(){
        var bobpos=this.body.position;
        var angle = this.body.angle;
       // bob.scale=1;
        push();
        translate(bobpos.x,bobpos.y);
        rotate (angle);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        ellipseMode(RADIUS);ellipse(0,0,this.r/2);
        pop();
        
    }
}