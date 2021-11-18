function resetPosition(event){
    // add animation
    document.getElementById("eye").style.marginLeft = "140" + "px";
    document.getElementById("eye").style.marginTop = "150" + "px";
}

function detectPosition(event){
    // default margin from top/left = 8px
    // console.log("mouse detected moving over me");
    // console.log(event);
    // console.log(event.clientX + ", " + event.clientY);

    // center is : y0=150, x0= 
    // width: main-530px eye-248px 
    // center width = (530 - 248)/2 + 8 (margin-left) = 141 + 8 = 149

    var x0 = 149;
    var x1 = x0 + 248;
    var y0 = 150;
    var y1 = y0 + 212;

    var diffX, diffY;

    if (event.clientX<= x0){
        diffX = x0 - event.clientX;
    }
    else
    {
        diffX = event.clientX - x1;
    }

    if (event.clientY<= x0){
        diffY = y0 - event.clientY;
    }
    else
    {
        diffY = event.clientY - y1;
    }

    if (true)
    // ((event.clientX <= x1 && event.clientX >= x0) && 
    // (event.clientY <= y1 && event.clientY >= y0)){
    //     console.log("you are within the center");
    //     document.getElementById("eye").style.marginLeft = "140" + "px";
    //     document.getElementById("eye").style.marginTop = "150" + "px";

    // }
    // else 
    // if (((diffX >= 248 && event.clientX>x1) || event.clientX<= x0) && 
    // ((diffY >= 212 && event.clientY>y1) || event.clientY<= y0))
    {
        /*
        event.target.

        offsetHeight: 637
​​
        offsetLeft: 8
        ​​
        offsetParent: <body>
        ​​
        offsetTop: 67
        ​​
        offsetWidth: 530

        */

        // if (event.clientX <= (event.target.offsetWidth + event.target.marginLeft)){
            
        // }

        var mLeft = (event.clientX);

        var mTop = (event.clientY);
        
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

        document.getElementById("eye").style.marginLeft = mLeft- 124 + "px";

        document.getElementById("eye").style.marginTop = mTop-150 + "px";

        // max x- 374
        // min x- 147

        // max y - 436
        // min y - 186

        // console.log(event.clientX + ", " + event.clientY);
    }
    // else
    // {
    //     console.log("can't display eye out of bounds");
    //     document.getElementById("eye").style.marginLeft = "140" + "px";
    //     document.getElementById("eye").style.marginTop = "150" + "px";
    // }

}