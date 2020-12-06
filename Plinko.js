class Plinkoes {
    constructor(x, y){
        var options = {isStatic: true};
        this.body = Bodies.circle(x, y, 10, options);
        this.height = 20;
        this.width = 20;
        World.add(world, this.body);
    };

    display(){
        ellipseMode(CENTER);
        fill(255);
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
    };
}