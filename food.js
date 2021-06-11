class Food{
    constructor(x,y){
        var options={
            density:0.5,
            
            
        }
        this.body=Bodies.rectangle(x,y,100,100,options);
        World.add(world,this.body);

        this.width=100
        this.height=100

        this.image=loadImage("images/bur_bottom.png");
        this.image1=loadImage("images/burger1.png");
        this.image2=loadImage("images/burger2.png");
        this.image3=loadImage("images/burger3.png");
        this.image4=loadImage("images/burger4.png");
        this.image5=loadImage("images/burger5.png");
        this.image6=loadImage("images/burger6.png");
        this.image7=loadImage("images/burger7.png");

        console.log(this.body);
    }
    display(){
        imageMode(CENTER);
        var rand=Math.round(random(1,7));
        switch(rand){
            case 1: image(this.image1,this.body.position.x,this.body.position.y,this.width,this.height);
            break;
            case 2: image(this.image2,this.body.position.x,this.body.position.y,this.width,this.height);
            break;
            case 3: image(this.image3,this.body.position.x,this.body.position.y,this.width,this.height);
            break;
            case 4: image(this.image4,this.body.position.x,this.body.position.y,this.width,this.height);
            break;
            case 5: image(this.image5,this.body.position.x,this.body.position.y,this.width,this.height);
            break;
            case 6: image(this.image6,this.body.position.x,this.body.position.y,this.width,this.height);
            break;
            case 7: image(this.image7,this.body.position.x,this.body.position.y,this.width,this.height);
            break;
            default:break;
        }
        
        console.log(this.body.speed);

        if(this.body.speed<1){
           Matter.Body.setPosition(this.body,{x:mouseX,y:this.body.position.y})    
        }
     
       

    }
}