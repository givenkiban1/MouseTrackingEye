function resetPosition(event){
    // this function is called when the mouse leave's the eyeball region, stop tracking
    // eyeball is re-centered
    // add animation
    document.getElementById("eye").style.marginLeft = "140" + "px";
    document.getElementById("eye").style.marginTop = "150" + "px";
}

function calculatePosition(clientX, clientY){
    // this function is called when the mousepad moves over the bg-image div
    // default margin from top/left = 8px
    // console.log(event.clientX + ", " + event.clientY);

    // center is : y0=150, x0= 
    // width: main-530px eye-248px 
    // center width = (530 - 248)/2 + 8 (margin-left) = 141 + 8 = 149

    var x0 = 149;
    var x1 = x0 + 248;
    var y0 = 150;
    var y1 = y0 + 212;

    // obtain the x and y coordinates of the mouse
    var mLeft = (clientX);

    var mTop = (clientY);
    
    // the code below checks that the mouse's coordinates
    // are within the boundary box
    // if exceeding, the coordinate is set to the limit
    if (mLeft <157){
        mLeft = 157;
    }
    else
    if (mLeft > 360){
        mLeft = 360;
    }

    if (mTop < 196){
        mTop = 196;
    }
    else
    if (mTop > 420){
        mTop = 420;
    }

    // assigning the coordinates of the eye to follow
    // offset is added to make sure that the eyeball is directly
    // under the mouse.
    document.getElementById("eye").style.marginLeft = mLeft- 124 + "px";

    document.getElementById("eye").style.marginTop = mTop-150 + "px";


}

var width = window.innerWidth, height = window.innerHeight;

function trackMouse(event){
    
    var scaleX = width / document.getElementById("bg-img").clientWidth;
    var scaleY = height / document.getElementById("bg-img").clientHeight;

    calculatePosition(event.clientX * (1/scaleX), event.clientY * (1/scaleY));

}


function updateDimensions(event){
    // console.log(window.innerHeight + " x " + window.innerWidth);
    width = window.innerWidth;
    height = window.innerHeight;
}