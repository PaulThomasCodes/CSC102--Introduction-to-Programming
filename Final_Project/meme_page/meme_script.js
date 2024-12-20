// Track the interval id
var interval_id = 0;

// This function will move the image around the page
function move_image() {
    // Disable the start button and enable the stop button
    document.getElementById("StartButton").disabled = true;
    document.getElementById("StopButton").disabled = false;

    // Create a shortcut to the image element
    var image = document.getElementById("meme_image");

    // Ensure the image is properly styled for movement
    image.style.position = "absolute";

    // Track the position of the image
    var oldX = 200;
    var oldY = 200;

    // Start moving the image
    interval_id = setInterval(function () {
        // Move the image by random values between -20 and 20 pixels
        var newX = Math.floor(Math.random() * 41) - 20;
        var newY = Math.floor(Math.random() * 41) - 20;

        oldX += newX;
        oldY += newY;

        // Ensure the image stays within the window boundaries
        oldX = Math.max(0, Math.min(window.innerWidth - image.width, oldX));
        oldY = Math.max(0, Math.min(window.innerHeight - image.height, oldY));

        image.style.left = oldX + "px";
        image.style.top = oldY + "px";
    }, 1000); // Move every second
}

// This function will stop moving the image
function stop_move_image() {
    // Clear the interval
    clearInterval(interval_id);

    // Enable the start button and disable the stop button
    document.getElementById("StartButton").disabled = false;
    document.getElementById("StopButton").disabled = true;
}
