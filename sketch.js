 
 var fixedSprite1,fixedSprite2,fixedSprite3,fixedSprite4;
 var movingSprite
 var music;
 var edge1,edge2,edge3,edge4;

function prelod(){
   music.loadSound("music.mp3");

}

function setup(){
    createCanvas(800,600);

    movingSprite = createSprite(random(20,750),500,20,20);
    movingSprite.shapeColor = "white";
    movingSprite.velocityX = 4;
    movingSprite.velocityY = 4;

    fixedSprite1 = createSprite(100,590,180,20);
    fixedSprite1.shapeColor = "green";

    fixedSprite2 = createSprite(300,590,180,20)
    fixedSprite2.shapeColor = "red";

    fixedSprite3 = createSprite(500,590,180,20);
    fixedSprite3.shapeColor = "brown";

    fixedSprite4 = createSprite(700,590,180,20);
    fixedSprite4.shapeColor = "pink";

    edge1 = createSprite(800,500,30,1000);
    edge1.shapeColor = "yellow";

    edge2 = createSprite(6,500,30,1000);
    edge2.shapeColor = "yellow";

    edge3 = createSprite(400,0,800,30);
    edge3.shapeColor = "yellow";

}

function draw(){
    background("black");

   createEdgeSprites();
   movingSprite.bounceOff(edge1);
   movingSprite.bounceOff(edge2);
   movingSprite.bounceOff(edge3);
  
   

    if(fixedSprite1.isTouching(movingSprite) && movingSprite.bounceOff(fixedSprite1)){
        movingSprite.shapeColor  ="green";
      // music.play();
    }

       if(fixedSprite2.isTouching(movingSprite) && movingSprite.bounceOff(fixedSprite2)){
        movingSprite.shapeColor  ="red";
        movingSprite.velocityX = 4;
       // music.stop();

       }
    
     if(fixedSprite3.isTouching(movingSprite)&& movingSprite.bounceOff(fixedSprite3)){
         movingSprite.shapeColor = "brown";
         movingSprite.velocityX = 0;
        // music.stop();
     }
   

    if(fixedSprite4.isTouching(movingSprite)&& movingSprite.bounceOff(fixedSprite4)) {
        movingSprite.shapeColor  ="pink";
        movingSprite.velocityX = 4;
        //music.play();

    }


  
   
    drawSprites();

    
}

