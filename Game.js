class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(500,260);
    car1.addImage("car1", car1Img);

    car2 = createSprite(700,510);
    car2.addImage("car2", car2Img);

    cars = [car1, car2];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background("pink");

      image(roadImg, 0, displayHeight, displayWidth*8, -displayHeight*1);
    
      var index = 0;
      
      var x = 175;
   
      for(var plr in allPlayers){
        index = index + 1 ;

        x = x + allPlayers[plr].distance;

        cars[index-1].x = x;

        if (index === player.index){
          camera.position.x = cars[index-1].x
        }
       
      }
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      player.distance +=15
      player.update();
    }

    if(player.distance > 9500){
      gameState = 2;
    }

    drawSprites();
  }

  end(){
    console.log("game end");
  }
}
