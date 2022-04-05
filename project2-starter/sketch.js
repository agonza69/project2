//the beginning of our query to Giphy API
var endPoint = "https://api.giphy.com/v1/gifs/search?";

/***TODO: enter your unique api key**/
//var apiKey = "&api_key=&q=";
var apiKey = "&api_key=dbSbzJgWb8OmpD11OhTtvLHrrz5uS77I&q=";
/***TODO: create empty variables for your buttons***/

/*var button =*/

var input, submitButton, button1, button2;

var track1, track2, track3, track4;




let img;

function preload() {
  img = loadImage('Images/phone.png');
}

/***TODO: create empty variables to track whether buttons
    have been pressed or not***/



//empty variable for the image to be displayed
//Feel free to rename
var gifImg;
//empty variable for our canvas
var canvas;

var newCanvas;

/*This function runs at the start of your program*/
function setup() {
  /*TODO: create the canvas and attach it to the dedicated
          div element in your HTML */
  //hint: https://github.com/processing/p5.js/wiki/Positioning-your-canvas

  /*TODO: assign the input and buttons from your HTML
          to the variables you created*/

  /**TODO: Add detection for each button */
  
    
    var canvas = createCanvas(500, 670, WEBGL);

    resetSketch();
  
    noStroke();
    strokeWeight(2);
    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');
  
    

  input = select('#search');

  submitButton = select('#submit');

  button1 = select('#btn');

  button2 = select('#btn2');

 

 /* button4 = select('#btn4');*/

  submitButton.mousePressed(gifAsk);

  button1.mousePressed(gifAsk1);

  button2.mousePressed(gifAsk2);

  

   


}

/**TODO: Write separate functions that are called when user
 *        clicks each button. These functions should create 
 *        the URL pointing to the Giphy API.
 */
//this function is similar to the one we wrote in our tutorial
function gifAsk(){

  //var url =
  var url = endPoint + apiKey + input.value();
  //loadJSON(url, getGiphy);
  loadJSON(url,getGiphy);

  track3= true;

}


function gifAsk1(){

  //var url =
  var url = endPoint + apiKey + "social media";
  //loadJSON(url, getGiphy);
  loadJSON(url,getGiphy);

  track1= true;
  
}

function gifAsk2(){

  //var url =
  var url = endPoint + apiKey + "mark zuckerberg" ;
  //loadJSON(url, getGiphy);
  loadJSON(url,getGiphy);
  
  track2 = true;
}

function resetSketch(){

  track4 = true;
  
}


/*add as many functions as necessary
function functionName1() {
  
}
function functionName2() {
  
} 
*/

let x = 30;
let y = 24;
let easing = 0.25;


//The behavior of the canvas will take place in this draw() function
function draw(){

    /**TODO: Use if() statements to specify each action that is taken
     *       on the canvas, based on which button is pressed.
     *        HINT: use boolean variables to keep track of which button
     *        is pressed.
    */

     background(0, 0, 10);
     
     rectMode(CENTER);

     if (track3==true){

      image(img, -150, -100, 300, 200);

     }

     

     if (track2 == true) {

     for (var i = 0; i < 8; i++) {
      push();
      
      // position
      var tx = 200 * cos(0.01*frameCount);
      // size
      var s1 = 100 * tan(0.01*frameCount);
      // rotate
      var r1 = TWO_PI * sin(0.001*frameCount);
      
        stroke(0, 46, 255);
        fill(200, 46, 255);
        rotate(r1+radians(frameCount)/2);
        rotate(TWO_PI * i / 8);
        translate(tx, tx/2);
        // rect(0, 0, 50*s1, 50/s1);
     arc(50, 50*s2, 80, 80/s2, 0, PI + QUARTER_PI, CHORD);
      
        for (var j = 0; j < 8; j++) {
          push();
          // position
          var stx = 100 * sin(0.001*frameCount);
          // size
          var s2 = 100 * cos(0.001*frameCount);
          // rotate
          var r2 = 200* cos(0.001*frameCount);
          
          rotate(radians(frameCount)*2);
          rotate(r2+(TWO_PI * j) / 8);
          fill(66*j, 250, 255);
          
          translate(stx, 0);
          // rect(0, 0, 10, 10);
          // rect(0, 0, s2, s2);
         circle(30, 30, 20);
          triangle(30, 75, 58, 20, 86, 75);
          pop();
        }
      pop();
    }
      
     }

     /*moving circles represent likes */

if (track1 == true) {

  for (var i = 0; i < 8; i++) {
    push();
    fill(255,50,0);
    rotateZ(radians(frameCount));
    rotateX((TWO_PI * i) / 8);
    rotateY((TWO_PI * i) / 8);
    var threedx = 400 * noise(0.01*frameCount);
    translate(threedx, threedx, 0);
    sphere(40);

    //blue for likes
    for(var j=0; j<6; j++){
      push();
      fill(10, 2, 250);
      strokeWeight(1);
      rotateZ(radians(frameCount));
      rotateX((TWO_PI * j) / 6);
      rotateY((TWO_PI * j) / 6);
      var threedxs = 400 * noise(0.01*frameCount);
      translate(100, 100, threedxs);
      sphere(15, 15, 12);
      pop();
    }
    pop();
    
  }
   
   //yellow circles for emojis
    for (var x = 0; x < 400; x += 50) {
      translate(x, x, -200);
      rotateX(frameCount * 0.10);
      rotateY(frameCount * 0.01);
      rotateZ(frameCount * 0.01);
      circle(30, 30, 20);
      
      fill(255,250,0);
    }
  
} 

     
      if (track4==true){

        
        
      }


}




/*This function finds and displays a random gif from
   the JSON file found in the GIPHY query*/
function getGiphy(gif){

  //selects a random element from the data[] array
  var randy = random(gif.data);
  //saves the location of the gif
  var foundGif = randy.images.original.url;

 

  //if an image element already exists, remove the image
  //BEFORE adding one to the page.
  if(gifImg != null)
  {
    gifImg.remove();
  }
  //p5js short-hand for creating and displaying an image element
  gifImg = createImg(foundGif);
  
  //this embeds the image in the div with idea 'gif-area'
  gifImg.parent("gif-area");

}


//code grave

/*let targetX = mouseX;
     let dx = targetX - x;
     x += dx * easing;
   
     let targetY = mouseY;
     let dy = targetY - y;
     y += dy * easing;
   
     ellipse(x, y + 50, 30, 50);
   
     if (mouseIsPressed) {
       stroke(95);
     } else {
       stroke(137, 284, 200);
     }
     rect(mouseX, mouseY, mouseX, mouseY);
     triangle(mouseX, mouseY, mouseX, mouseY);*/
