function preload(){
gunIMG = loadImage("gun.png")
bulletIMG = loadImage("bullet-png-1024.png")
enemyIMG = loadImage("R.png")
backgroundIMG = loadImage("background.jpg")
//enemyGIF = createImg("R.gif")
}
function setup(){
createCanvas(displayWidth,displayHeight)
gun = createSprite(displayWidth/2,displayHeight/2)
gun.addImage(gunIMG)
gun.scale = 0.09
enemyGroup = new Group()
bulletGroup = new Group()


}
function draw(){
background(backgroundIMG)

//image(enemyIMG,200,200 )
//enemyGIF.position(200,200)

gun.x = mouseX 
gun.y = mouseY

if(keyDown("space")){
bulletG()
if (bullet.isTouching(enemyGroup)){
    enemyGroup.destroyEach()
    console.log("DESTROYED!")
}
}
spaceShip()


drawSprites()
}
function spaceShip(){
   if (frameCount % 120 === 0) {
    enemy = createSprite(displayWidth,random(0,displayHeight))
    enemy.addImage(enemyIMG)
    enemy.scale=0.03
    enemy.velocityX = -4
    enemyGroup.add(enemy)
    enemyGroup.setLifetimeEach(150)
   }
}
function bulletG(){
    bullet = createSprite(gun.x,gun.y)
    bullet.addImage(bulletIMG)
    bullet.scale = 0.02
    bullet.velocityX = 6 
    bulletGroup.add(bullet)
    bulletGroup.setLifetimeEach(150)

}