class ground
{
 constructor(x,y,width,height)
 {

    var options = {
        isStatic : true

    }
     //creates physical body
this.body= Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body)

 }

 display()
 { 
     //namespacing 
     var pos = this.body.position
     rectMode(CENTER)
     fill("Green");
     //creates displayed body
     rect(pos.x,pos.y,this.width,this.height)

 }
}