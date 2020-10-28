class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.path = loadImage("sprites/smoke.png")
    this.dottedpath = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
   if(this.body.velocity.x > 10 && this.body.position.x > 200){
    var position = [this.body.position.x,this.body.position.y];
    this.dottedpath.push(position);
   }
    for(var i = 0;i<this.dottedpath.length;i++){
      image(this.path,this.dottedpath[i][0],this.dottedpath[i][1]);
    
  }
  }}
