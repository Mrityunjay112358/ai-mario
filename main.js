noseX="";
noseY="";

function preload() {
	world_start = loadSound("world_start.wav");
coin=loadSound("coin.wav");
game_over=loadSound("gameover.wav");
jump=loadSound("jump.wav");
kick=loadSound("kick.wav");
mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('console_screen');

	posenet = ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);

}

function draw() {
	game()
}

function modelLoaded(){
	console.log("model is loaded");
}

function gotPoses(results){
if(results.length>0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
}
}
