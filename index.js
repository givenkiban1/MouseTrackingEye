function resetPosition(event){
    // this function is called when the mouse leave's the eyeball region, stop tracking
    // eyeball is re-centered
    // add animation
    document.getElementById("eye").style.marginLeft = "140" + "px";
    document.getElementById("eye").style.marginTop = "150" + "px";
}

var angles = [];
var anglesY = [];

for (var i=-50; i <50 ; i++){
    angles.push(i);
    anglesY.push(-i);
}



// console.log(angles);

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
    if (mLeft <200){
        mLeft = 200;
    }
    else
    if (mLeft > 310){
        mLeft = 310;
    }

    if (mTop < 230){
        mTop = 230;
    }
    else
    if (mTop > 380){
        mTop = 380;
    }

    // assigning the coordinates of the eye to follow
    // offset is added to make sure that the eyeball is directly
    // under the mouse.
    // console.log(
    //     (mLeft- 124) + " , " +
    //     (mTop-150)
    // );

    // right-edge: rotateY(-50deg)
    // left edge: rotateY(50deg)
    // Y angle range: -1 * (-50 to 50)_

    var xRange = 310 - 200;
    var yRange = 380 - 230;
    var yAngleRange = 100;

    var xyAngleRate = yAngleRange / xRange;
    var yyAngleRate = yAngleRange / yRange;

    document.getElementById("eye").style.marginLeft = mLeft- 124 + "px";
    // console.log(Math.ceil((mLeft- 124) * xyAngleRate)-70);
    // console.log(Math.ceil((mTop- 150) * yyAngleRate)-54);
    // console.log( angles[Math.ceil((mLeft- 124) * xyAngleRate)] );
    var angleIndex = Math.ceil((mLeft- 124) * xyAngleRate)-70;
    // document.getElementById("eye").style.transform = "rotateY(" + angles[angleIndex] + "deg)";
    
    var angleIndey = Math.ceil((mTop- 150) * yyAngleRate)-54;
    // document.getElementById("eye").style.transform = "rotateX(" + angles[angleIndey] + "deg)";

    document.getElementById("eye").style.marginTop = mTop-150 + "px";
    document.getElementById("eye").style.transform = "rotateY(" + angles[angleIndex] + "deg) "
    // ;
     + 
    "rotateX(" + (-angles[angleIndey]) + "deg)";

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