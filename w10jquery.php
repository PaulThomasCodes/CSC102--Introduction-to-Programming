<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>w10 Jquery Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <style>
        #divAnimate {
            width: 200px;
            height: 200px; /* Corrected case sensitivity */
        }

        #backgroundImg{
          width: 500px;  
        }
    </style>
</head>
<body>
    <script>
        // this code will not run until all of the page elements have loaded
        $(document).ready(function() {
            // set up a function to handle the click event of our btnChangeColor button
            $('#btnChangeColor').click(function() {
                // change the color of the div divAnimate
                $('#divAnimate').css('background-color', 'blue');
                $('#divAnimate').css('color', 'white');
                // change the color of the buttons to match
                $('#divAnimate').css('background-color', 'blue');
                $('#divAnimate').css('color', 'white');
            });

            // other click event handlers here...

            // set up the function to handle the click event of our btnStartDivMoving Button
            $('#btnStartDivMoving').click(function() {
                // Play the audio file
                var audio = new Audio('cars.mp3');
                audio.play();

                // animate the first div box with the class name of animated-div
                $(".animated-div:first").animate({
                    marginLeft: '+=200px', // move to the right by 200 pixels
                    opacity: .25, // reduce the opacity to .25
                    width: '+=50px', // make the width wider by 50px
                    height: '+=50px' // make the height of the box taller by 50px
                }, 1500); //1500 is 1.5 seconds - the duration of this animation

                // animate the last element
                $(".animated-div:last").animate({
                    marginLeft: '+=300px', // move to the right by 300 pixels
                    opacity: .5, // reduce the opacity to .5
                    width: '+=100px', // make the width wider by 100px
                    height: '+=100px' // make the height of the box taller by 100px
                }, 2000); //2000 is 2 seconds for the duration of this animation

                // animate all of the items with the class of animated-div
                $('.animated-div').each(function(index) {
                    $(this).delay(index * 500).animate({
                        marginLeft: '+=300px', // move to the right by 300 pixels
                        opacity: .3, // reduce the opacity to .3
                        width: '+=20px', // make the width wider by 20px
                        height: '+=20px' // make the height of the box taller by 20px
                    }, 1000); //1000 is 1 second
                });
            });
        });
    </script>

    <!-- Set up a div and some buttons so we can change how the div looks -->
    <div id="divAnimate">This is a div</div>

    <!-- Add buttons to do stuff -->
    <button id="btnChangeColor">Change the Div Color</button>
    <button id="btnFadeIn">Fade In</button>
    <button id="btnFadeOut">Fade Out</button>
    <button id="btnSlideUp">Slide Up</button>
    <button id="btnSlideDown">Slide Down</button>
    <button id="btnSlideDownToggle">Slide Down Toggle</button>

    <!-- these divs can be moved around the page by the button clicks -->
    <button id="btnStartDivMoving">Start Moving the Divs</button>

    <div class="animated-div" style="width: 100px; height: 100px; background-color: red;"></div>
    <br>
    <div class="animated-div" style="width: 100px; height: 100px; background-color: blue;"></div>
    <br>
    <div class="animated-div" style="width: 100px; height: 100px; background-color: green;"></div>
    <br>
    <div class="animated-div" style="width: 100px; height: 100px; background-color: yellow;"></div>
    <br>

    <button id="btnImgFun">Alter Image</button>
    <img id="backgroundImg" src="background.jpg" alt="background">

    <!-- Audio gets triggered when you click "start moving the divs" -->
    <audio id="audioElement" src="cars.mp3" preload="auto"></audio>
</body>
</html>
