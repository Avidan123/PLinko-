class Plinko{
constructor(x,y){
var options={
isStatic:true
}
this.body=Bodies.circle(x,y,10,options)
this.r=r

World.add(world,this.body)

}
display(){
    var pos =this.body.position
    fill("white")
    ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)


}
}