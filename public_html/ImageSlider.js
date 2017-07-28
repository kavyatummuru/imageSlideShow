/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var imgArray = [
    'Images/1.jpg',
    'Images/2.jpg',
    'Images/3.jpg',
    'Images/4.jpg',
    'Images/5.jpg'],
    curIndex = 0;
    imgDuration = 3000;
    fadeout=0;
    start=1;

function slideShow() {
    if(start === 1)
    {
    if(fadeout === 0){
    document.getElementById('slider').src = imgArray[curIndex];
     curIndex++;
    if (curIndex === imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
    }
    else
        {
        document.getElementById('slider').className += "fadeOut";
        setTimeout(function() {
        document.getElementById('slider').src = imgArray[curIndex];
        document.getElementById('slider').className = "";
        },1000);
    
    curIndex++;
    if (curIndex === imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration); 
        }
    }
    else{
        setTimeout("slideShow()", imgDuration); 
    }
}

function fadeOut(){
    if(fadeout === 0)
    {
     fadeout=1;
     document.getElementById("FadeEffect").innerHTML="Remove Fade";
    }
    else
    {
        fadeout=0;
        document.getElementById("FadeEffect").innerHTML="Fade Out";
    }
    }
    
    
function stopSlide()
{
    if(start === 1)
    {
     start=0;
     document.getElementById("startStop").innerHTML="Start";
    }
    else
    {
        start=1;
        document.getElementById("startStop").innerHTML="Stop";
    }
}
