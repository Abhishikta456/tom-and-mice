const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone, cat;
var backgroundImg, mouse;
var ball, slingShot;
var mouse1,jerry,mouse2,mouse3,mouse4;

function preload() {
    backgroundImg = loadImage("grou.png");
}

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20);
    cat = new  Cat(150, 305, 350, 300);
    


    Box = new Box(810, 420, 70, 70);
    mouse1= new Mouse1(700, 450);
    mouse2 = new Mouse2(920, 450)
    log1 = new Log(810, 360, 300, PI / 2);

    Box3 = new Box(700, 340, 70, 70);
    Box4 = new Box(920, 340, 70, 70);
    mouse3 = new Mouse3(810, 320);
    mouse4 = new Mouse4(700, 220);
    mouse5 = new Mouse5(920, 220);
    mouse6 = new Mouse6(810, 120);



    log3 = new Log(810, 280, 300, PI / 2);

    stone5 = new Box(810, 260, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    log6 = new Log(810, 180, 300, PI / 2);


   

    slingshot = new SlingShot(ball.body, { x: 200, y: 200 });
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    Box.display();
    ground.display();
    mouse.display();
    mouse2.display();
    log1.display();

    Box3.display();
    Box4.display();
    mouse3.display();
    log3.display();
    mouse4.display();
    mouse5.display();
    mouse6.display();

    Box5.display();
    log4.display();
    log5.display();
    log6.display();

    ball.display();
    cat.display();
    slingshot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


function mouseReleased() {
    slingshot.fly();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });

}


function mouseReleased() {
    slingshot.fly();
    gameState = "launched";
}

function keyPressed() {
    if (keyCode === 32 && ball.body.speed < 1) {
        ball.trajectory = [];
        Matter.Body.setPosition(ball.body, { x: 200, y: 50 });
        slingshot.attach(ball.body);
    }
}

async function getBackgroundImg() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);

    if (hour <= 0600 && hour >= 1900) {
        bg = "grou.png";
    } else {
        bg = "school.jpeg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}