class Ground {
    constructor(x, y, width, height, red, green, blue){
        var options = {isStatic: true};
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.red = red;
        this.green = green;
        this.blue = blue;
        World.add(world, this.body);
    };

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(245);
        rect(pos.x, pos.y, this.width, this.height);
    };
}