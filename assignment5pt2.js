function draw(){
    var canvas = document.getElementById('canvas');
    var canvasContext = canvas.getContext('2d');
    var startPt = 0;
    var endPt = 2 * Math.PI;
    canvasContext.beginPath();
    canvasContext.arc(400, 150, 100, startPt, endPt);
    canvasContext.fillStyle= "rgb(0,255,0)";
    canvasContext.fill();
    canvasContext.closePath();

    canvasContext.beginPath();
    canvasContext.arc(400, 150, 70, startPt, endPt);
    canvasContext.fillStyle= "rgb(0,245,0)";
    canvasContext.fill();
    canvasContext.closePath();

    canvasContext.beginPath();
    canvasContext.arc(400, 150, 35, startPt, endPt);
    canvasContext.fillStyle= "rgb(0,235,0)";
    canvasContext.fill();
    canvasContext.closePath();
}

function changeColor() {
    var sliderValue= parseInt(document.getElementById("color").value);
    var canvas = document.getElementById('canvas');
    var canvasContext = canvas.getContext('2d');
    var startPt = 0;
    var endPt = 2 * Math.PI;
    var c2= sliderValue-10;
    var c3 =sliderValue-20;

    if(sliderValue != "0"){
        canvasContext.beginPath();
        canvasContext.arc(400, 150, 100, startPt, endPt);
        canvasContext.fillStyle= "rgb(0,"+sliderValue+",0)";
        canvasContext.fill();
        canvasContext.closePath();

        canvasContext.beginPath();
        canvasContext.arc(400, 150, 70, startPt, endPt);
        canvasContext.fillStyle= "rgb(0,"+c2+",0)";
        canvasContext.fill();
        canvasContext.closePath();

        canvasContext.beginPath();
        canvasContext.arc(400, 150, 35, startPt, endPt);
        canvasContext.fillStyle= "rgb(0,"+c3+",0)";
        canvasContext.fill();
        canvasContext.closePath();
        }
    }
