

# Build A Snapchat Clone

![Snapchat](https://www.snapchat.com/global/social-lg.jpg)

## What is Snapchat? 

Snapchat is a messaging app which lets users share photos and messages in the moment. You can apply filters to photos before sharing. Once shared, photos "self destruct" after a short period of time. 

Snapchat is filing for an IPO, which is short for an Initial Public Offering. This means the public can invest in Snapchat by buying stock in the company. 

Learn more here: 

- https://en.wikipedia.org/wiki/Snapchat
- http://www.marketwatch.com/story/snap-ipo-six-things-we-now-know-about-snapchat-parent-company-2017-02-02
- https://www.fool.com/investing/2017/02/24/history-shows-you-shouldnt-buy-the-snap-ipo.aspx

## Our project 

Today we are going to build a Snapchat clone. We'll apply some text and image filters, and who knows, maybe even file our own IPO too! 

## How To 

Follow these steps to get going! 

### Create New Sketch 

Create a new sketch at https://alpha.editor.p5js.org/

### Add variables 

Declare some variables. At the top of your script, add the following: 

```
var capture;
var videoWidth = 320;
var videoHeight = 240;
```

### Capture video 

Capture video by adding the following to your setup and draw functions: 

```
// paste in setup()

createCanvas(videoWidth, videoHeight);
capture = createCapture(VIDEO);
capture.size(videoWidth, videoHeight);
//capture.hide();
```

```
// paste in draw()

background(255);
image(capture, 0, 0, videoWidth, videoHeight);
```

Note you can uncomment the last setup line to hide the source video. 


### Add filters 

After you draw your image, you can apply one of p5js's many filters. For example: 

```
// paste in draw() 

filter('posterize', 2);
```

reference the source code for more filters: https://github.com/processing/p5.js/blob/master/src/image/filters.js#L178


### Add Text

We're going to let the user type in some text. Add the following to your index.html page: 

```
// paste in index.html, between the <body> tags 

<input type="text" name="myText" id="myText">
```

Next draw the text onto your image, after your filters, add the following code: 

```
var myText = document.getElementById("myText").value;
textSize(30);
fill('limegreen');
text(myText, width / 2, height / 2);
```

### Download your image

In your index.html file, add a button: 

```
// paste in index.html 

<button id="takePhoto">Cheese!</button>
```

In your setup function, add the following: 

```
// save and download photo
document.getElementById('takePhoto').onclick = function () {
    save("matts photo");
};
```

## File for your IPO! Get famous! Make $$$! 




