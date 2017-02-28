var capture;
var videoWidth = 320;
var videoHeight = 240;

function setup() {
    createCanvas(videoWidth, videoHeight);
    capture = createCapture(VIDEO);
    capture.size(videoWidth, videoHeight);
    //capture.hide();

    // save and download photo
    document.getElementById('takePhoto').onclick = function () {
        save("matts photo");
    };
}

function draw() {
    background(255);

    // draw image
    image(capture, 0, 0, videoWidth, videoHeight);

    // apply filters
    filter('posterize', 2);
    filter('gray');
    // reference the source code for more filters
    // https://github.com/processing/p5.js/blob/master/src/image/filters.js#L178

    // add some text
    var myText = document.getElementById("myText").value;
    textSize(30);
    fill('limegreen');
    text(myText, width / 2, height / 2);
}

// draws image pixels as circles 
function drawCirclePixels(imageCapture) {
    noStroke();
    fill(0);
    imageCapture.loadPixels();
    var stepSize = round(constrain(mouseX / 8, 6, 32));
    for (var y = 0; y < height; y += stepSize) {
        for (var x = 0; x < width; x += stepSize) {
            var i = y * width + x;
            var darkness = (255 - imageCapture.pixels[i * 4]) / 255;
            var radius = stepSize * darkness;
            ellipse(x, y, radius, radius);
        }
    }
}
// var stepSize = parseInt(document.getElementById("stepSize").value);
// <input type="range" name="pixelSize" id="stepSize" min="1" max="100" value="10">