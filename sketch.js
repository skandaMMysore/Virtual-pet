var dog,sadDog,happyDog;
var database;
var feedthedog,addFood;
var food;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food = new Food();

  feed = createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed();

  addFood = createButton("Add the Food");
  addFood.position(800,95);
  addFood.mousePressed();

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
