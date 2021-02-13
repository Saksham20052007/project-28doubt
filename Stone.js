class Stone{
    
    constructor(x, y, width, height){

        var options={
            'density' : 1.2,
            'friction' : 0.8,
            'restitution' :0.5, 
            
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);

        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        
    }
}