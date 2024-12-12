// track the interval id
var iterval_id = 0;
//this functiono will move our image around the page

// this function will stop moving the image
function move_image(){
    // make it so we can't click on the  start button (since we started moving the )
    document.getElementById("StartButton").disabled = false

    // make it so we can't on the stop button
    document.getElementById("StartButton").disabled = false
    

    // create a nickname/shortcut variable that points to our ht,l page
    var image = document.getElementById("meme_image");

    // this will keep track of where the image was
    var oldX = 200;
    var oldY = 200;

    // keeping track of the interval_id will allow us to stop moving the image
    interval_id = setInterval(function (){
        // set the x and y coordinates for the iimage
        var newX = 5; // moving the image by 5 pixels - this could be a random number
        var newY = 5; // moving the image by 5 pixels - this could be a random number

        // oldX += newX is the same thing as oldX = oldX + newX
        oldX += newX;
        //oldX += oldx + newX
        oldY = oldY + newY;

        console.log("oldX = " + oldX)
        console.log("oldy = " + oldY)

        image.style.left = oldX + "px";
        image.style.top = oldY + "px";
    }, 1000); // 1000 is 1000 miliseconds = 1 second
}

// this function will stop moving the image
function stop_move_image(){
    // call the bult in JavaScript function to clear out the interval
    clearInterval(interval_id);
}
