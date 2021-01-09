var engine, world;

var ground, helicopter, pack, packbody;
var helicopterIMG, packageIMG;
var prop1;

function preload() {
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Matter.Engine.create();
	world = engine.world;

	pack = createSprite(400, 200);
	pack.addImage(packageIMG);
	pack.scale = 0.2;

	helicopter = createSprite(400, 200);
	helicopter.addImage(helicopterIMG);
	helicopter.scale = 0.6;

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255);
	prop1 = { isStatic: true, restitution: 0.8 };

	packbody = Matter.Bodies.circle(400, 200, 5, prop1);
	Matter.World.add(world, packbody);

	ground = Matter.Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	Matter.World.add(world, ground);
}


function draw() {
	background(0);
	keyPressed();

	if (keyCode == LEFT_ARROW) {
		helicopter.position.x = helicopter.position.x - 5;
	}
	if (keyCode == RIGHT_ARROW) {
		helicopter.position.x = helicopter.position.x + 5;
	}

packbody.position.x=helicopter.position.x;

	pack.position.x = packbody.position.x;
	pack.position.y = packbody.position.y;

	Matter.Engine.update(engine);

	drawSprites();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packbody, false);
	}

}