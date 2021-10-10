var log1, log2, log3, log4, log5, log6, log7, log8, log9, log10;

var log11, log12, log13, log14, log15, log16, log17, log18, log19, log20;

var log21, log22, log23, log24, log25, log26, log27, log28, log29, log30;

var log31, log32, log33, log34, log35, log36, log37, log38;

var ghost, ghostImg;

var alice;

var restart, restartImg;

var reset;

function preload(){

    ghostImg = loadImage("img1.png");

    restartImg = loadImage("restart.png")

}

function setup(){

    createCanvas(700, 700);

    log1 = createSprite(10, 346, 20, 710);
    log1.shapeColor = "brown";

    log2 = createSprite(300, 10, 630, 20);
    log2.shapeColor = "brown";

    log3 = createSprite(390, 690, 630, 20);
    log3.shapeColor = "brown";

    log4 = createSprite(690, 346, 20, 710);
    log4.shapeColor = "brown";

    log5 = createSprite(85, 655, 20, 90);
    log5.shapeColor = "brown";

    log6 = createSprite(300, 655, 20, 90);
    log6.shapeColor = "brown";

    log7 = createSprite(260, 620, 90, 20);
    log7.shapeColor = "brown";

    log8 = createSprite(560, 655, 20, 90);
    log8.shapeColor = "brown";

    log9 = createSprite(605, 60, 20, 90);
    log9.shapeColor = "brown";

    log10 = createSprite(400, 60, 20, 90);
    log10.shapeColor = "brown";

    log11 = createSprite(160, 60, 20, 90);
    log11.shapeColor = "brown";

    log12 = createSprite(690, 346, 20, 710);
    log12.shapeColor = "brown";

    log13 = createSprite(218, 115, 135, 20);
    log13.shapeColor = "brown";

    log14 = createSprite(295, 140, 20, 70);
    log14.shapeColor = "brown";

    log15 = createSprite(550, 95, 90, 20);
    log15.shapeColor = "brown";

    log16 = createSprite(495, 150, 20, 130);
    log16.shapeColor = "brown";

    log17 = createSprite(645, 190, 70, 20);
    log17.shapeColor = "brown";

    log18 = createSprite(600, 260, 20, 160);
    log18.shapeColor = "brown";

    log19 = createSprite(550, 330, 80, 20);
    log19.shapeColor = "brown";

    log20 = createSprite(650, 440, 60, 20);
    log20.shapeColor = "brown";

    log21 = createSprite(620, 505, 20, 150);
    log21.shapeColor = "brown";

    log22 = createSprite(550, 500, 120, 20);
    log22.shapeColor = "brown";

    log23 = createSprite(494, 535, 20, 90);
    log23.shapeColor = "brown";

    log24 = createSprite(40, 300, 80, 20);
    log24.shapeColor = "brown";

    log25 = createSprite(70, 240, 20, 100);
    log25.shapeColor = "brown";

    log26 = createSprite(85, 190, 50, 20);
    log26.shapeColor = "brown";

    log27 = createSprite(120, 220, 20, 80);
    log27.shapeColor = "brown";

    log28 = createSprite(164, 250, 107, 20);
    log28.shapeColor = "brown";

    log29 = createSprite(208, 285, 20, 55);
    log29.shapeColor = "brown";

    log30 = createSprite(47, 500, 55, 20);
    log30.shapeColor = "brown";

    log31 = createSprite(64.4, 444, 20, 95);
    log31.shapeColor = "brown";

    log32 = createSprite(82, 400, 55, 20);
    log32.shapeColor = "brown";

    log33 = createSprite(119, 470, 20, 160);
    log33.shapeColor = "brown";

    log34 = createSprite(160, 550, 200, 10);
    log34.shapeColor = "brown";

    log35 = createSprite(220, 430, 20, 150);
    log35.shapeColor = "brown";

    log36 = createSprite(360, 300, 150, 20);
    log36.shapeColor = "brown";

    log37 = createSprite(470, 430, 20, 150);
    log37.shapeColor = "brown";

    log38 = createSprite(350, 500, 100, 20);
    log38.shapeColor = "brown";

    ghost = createSprite(300, 400);
    ghost.addImage("ghostImg", ghostImg);
     ghost.scale = 0.2;

    alice = createSprite(45, 685, 20, 20);
    alice.shapeColor = "yellow"

}

function draw(){

    background("black");

    if(alice.isTouching(ghost)){
        
        restart = createSprite(350, 350);
        restart.addImage("restartImg", restartImg);
        restart.scale = 2;

        alice.visible = false;

        ghost.visible = false;

    }

    alice.bounceOff(log1);
    alice.bounceOff(log2);
    alice.bounceOff(log3);
    alice.bounceOff(log4);
    alice.bounceOff(log5);
    alice.bounceOff(log6);
    alice.bounceOff(log7);
    alice.bounceOff(log8);
    alice.bounceOff(log9);
    alice.bounceOff(log10);
    alice.bounceOff(log11);
    alice.bounceOff(log12);
    alice.bounceOff(log13);
    alice.bounceOff(log14);
    alice.bounceOff(log15);
    alice.bounceOff(log16);
    alice.bounceOff(log17);
    alice.bounceOff(log18);
    alice.bounceOff(log19);
    alice.bounceOff(log20);
    alice.bounceOff(log21);
    alice.bounceOff(log22);
    alice.bounceOff(log23);
    alice.bounceOff(log24);
    alice.bounceOff(log25);
    alice.bounceOff(log26);
    alice.bounceOff(log27);
    alice.bounceOff(log28);
    alice.bounceOff(log29);
    alice.bounceOff(log30);
    alice.bounceOff(log31);
    alice.bounceOff(log32);
    alice.bounceOff(log33);
    alice.bounceOff(log34);
    alice.bounceOff(log35);
    alice.bounceOff(log36);
    alice.bounceOff(log37);
    alice.bounceOff(log38);

    if(mousePressedOver(restart)){

      reset();

    }

    drawSprites();

}

function reset(){

    

}

function keyPressed(){

    if(keyCode === UP_ARROW){

        alice.y = alice.y - 12;

    }

    if(keyCode === DOWN_ARROW){

        alice.y = alice.y + 12;

    }

    if(keyCode === LEFT_ARROW){

        alice.x = alice.x - 12;

    }

    if(keyCode === RIGHT_ARROW){

        alice.x = alice.x + 12;

    }

}
