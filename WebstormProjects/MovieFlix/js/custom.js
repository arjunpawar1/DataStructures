/**
 * Created by arjun on 5/24/2016.
 */

var i=0;
window.ready(
    function ()
{
    var a = document.getElementByClassName("check");
    
    var ct = document.createElement("span");
    ct.setAttribute("class","glyphicon");
    ct.setAttribute("class","glyphicon-play-circle-");
    ct.setAttribute("style","textAlign:center");

    a.appendChild(ct);
    
    

});
/**
var clear;

 function mOver(b)

 {
     carousel(b)

  clear = setInterval(slides(b),1000);
    };



function mOut(k) {
   k.src="images/71P72dgzo9L._SL1500_.jpg"
    clearInterval(clear);
}


function slides(j)
{

    var a = ["Narcos-Netflix-Series.jpg", "images.jpg"];




        j.src = "images/" + a[i];
        i++;
}


**/