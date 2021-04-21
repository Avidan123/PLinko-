class Particles{
constructor(x,y,r){
var options={
restitution:0.4,
}
this.body=bodies.circle(x,y,this.r,options)
this.r=r

this.color=color(random(0,255),random(0,255),random(0,255))
World.add(world,this.body)
}
display(){

var pos=this.body.position
var angle =this.body.angle

push()
translate(pos.x,pos.y)
rotate(angle)

noStroke()
fill(this.color)
ellipseMode(radius)
ellipse(0,0,this.r,this.r)

pop()


}

}