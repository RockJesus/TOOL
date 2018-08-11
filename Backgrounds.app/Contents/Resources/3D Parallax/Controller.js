var updateMousePosition = true;
var fps = 24;

var parallaxFront = 0.3;
var parallaxMiddle = 0.2;
var parallaxBack = 0.1;

var screenWidth = screen.width;
var screenHeight = screen.height;

// Init

function ready()
{
    var isRetinaDisplay = screenHeight >= 1600;
    
    if(isRetinaDisplay)
    {
       loadRetinaImages();
    }
    
    var sizeFront = (1 + parallaxFront);
    var sizeMiddle = (1 + parallaxMiddle);
    var sizeBack = (1 + parallaxBack);
    
    $('#imageFront').css('width', sizeFront * screenWidth + 'px');
    $('#imageMiddle').css('width', sizeMiddle * screenWidth + 'px');
    $('#imageBack').css('width', sizeBack * screenWidth + 'px');
    
    $('#imageFront').css('height', sizeFront * screenHeight + 'px');
    $('#imageMiddle').css('height', sizeMiddle * screenHeight + 'px');
    $('#imageBack').css('height', sizeBack * screenHeight + 'px');
}

// Logic

function updateMousePos(x, y)
{
    updateImageParallax('#imageFront', parallaxFront, x, y);
    updateImageParallax('#imageMiddle', parallaxMiddle, x, y);
    updateImageParallax('#imageBack', parallaxBack, x, y);
}

function updateImageParallax(imageID, parallax, x, y)
{
    // Normalize & Shift
    var offsetNormal = {x: normalize(x / screenWidth) - 0.5, y: normalize(y / screenHeight) - 0.5};
    
    // Invert x axis, y is already inverted
    offsetNormal = {x: -offsetNormal.x, y: offsetNormal.y};
    
    // Apply Parallax Factor
    var offset = {x: (parallax * screenWidth), y: (parallax * screenHeight)};
    
    // Calculate location
    var newX = parseInt(-(offset.x / 2) + (offsetNormal.x * offset.x));
    var newY = parseInt(-(offset.y / 2) + (offsetNormal.y * offset.y));
    
    $(imageID).css("left", '' + newX + 'px ');
    $(imageID).css("top", '' + newY + 'px ');
}

// Helpers

function loadRetinaImages()
{
    $("#imageFront").css('backgroundImage', 'Front @2x.png');
    $("#imageMiddle").css('backgroundImage', 'Middle @2x.png');
    $("#imageBack").css('backgroundImage', 'Back @2x.png');
}

function normalize(value)
{
    return Math.min(Math.max(0, value), 1.0);
}