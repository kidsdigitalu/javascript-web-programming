# Were going to program our own 2d platform game

- How will our game be played? How do you win our game?
- What are the players / pieces / characters for our game? 
- What are similar games we can use for inspiration? 

This will be a 3 week project. 

## Reference 

- http://p5play.molleindustria.org/
- http://creative-coding.decontextualize.com/making-games-with-p5-play/
- Game examples: http://p5play.molleindustria.org/examples/index.html?fileName=pong.js

## Concepts 

- Event oriented programming
- Object oriented programming, classes  
- Keyboard events, mouse events 
- timers, setTimeout, setInterval 

## The Tools We Use 

For this project we'll be using the online P5js editor. It's in Alpha and it's awesome! 

Get started by signing up here: https://alpha.editor.p5js.org/. The editor allows us to save our projects to the web so we can easily share them with Family, Friends, and edit them later. 

If you have extra time at the end of class, upload the sketches you programmed in the first few classes to your profile so you can share them!

## Steps 

### Create a sprite that moves 

Open the side panel and open index.html

Add the p5.play library by creating a new line after line 6 and pasting this code: 

```javascript
<script src="https://cdn.rawgit.com/molleindustria/p5.play/master/lib/p5.play.js"></script>
```

Open the file sketch.js and close the side panel.  

Now let's make our code look like this together! 

```javascript
var spr;
function setup() {
  createCanvas(400, 400);
  spr = createSprite(width/2, height/2, 40, 40);
  spr.shapeColor = color(255);
  spr.velocity.y = 0.5;
}
function draw() {
  background(50);
  drawSprites();
}
function mousePressed() {
  spr.position.x = mouseX;
  spr.position.y = mouseY;
}
```

What happens? 

### Move the sprite with your keyboard

Now, lets have our sprite move with keyboard controls. Lets make our code looks like this together: 

```javascript
var spr;
function setup() {
  createCanvas(400, 400);
  spr = createSprite(width/2, height/3, 40, 40);
  spr.shapeColor = color(255);
}
function draw() {
  background(50);
  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  text("use arrow keys, or SPACE to stop", width/2, height*0.67);
  drawSprites();
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    spr.setSpeed(1.5, 0);
  }
  else if (key == ' ') {
    spr.setSpeed(0, 0);
  }
  return false;
}
```

What happens? 

Now it's your turn - make the sprite move with the other arrow keys which are: `DOWN_ARROW, LEFT_ARROW, UP_ARROW`. How fast will the sprite move in each direction? 

