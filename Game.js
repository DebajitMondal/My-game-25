class Game {
  constructor(){

  }
  getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val()
    })
  }

 update(state){
   database.ref('/').update({
      gameState: state
   })
 }

 start(){
  if(gameState === 1){
    player1 = new Player();
    player1.getCount();
    player1.getCount1();
    }
     form = new Form()
    form.display();
  }
   
  bg = createSprite(camera.x+300,200,20,20);
  bg.addImage("img",bgImg);
  bg.scale = 2;
  building1 = createSprite(displayWidth/2,200,20,20);
  building1.addImage("img",buildingImg);

  nonplayer = createSprite(-200,105,30,30)
  nonplayer.addAnimation("runing",nonplayerImg)
  nonplayer.debug = true
  nonplayer.scale = 0.2
  nonplayer.setCollider("rectangle",0,0,850,460)
  nonplayer.visible = false;

  Ground = createSprite(width/2,390,20000,20)

 Ground.shapeColor = "orange"
 Ground2 = createSprite(-50,130,500,10);
 

 Ground3 = createSprite(200,110,10,50)

 plr1 = createSprite(100,200)
 plr1.addAnimation("player1",plr1Img)
 plr1.scale = 0.25
 plr1.setCollider("rectangle",0,0,700,370)
 plr1.velocityY = plr1.velocityY + 1
 Ground.collide(plr1);
 plr1.velocityX = 8;

}