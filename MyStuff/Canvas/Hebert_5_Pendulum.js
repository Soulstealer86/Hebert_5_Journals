window.onload = function () {
    "use strict";
    var anim = new Animation("leCanvas");
    var canvas = anim.getCanvas();
    var context = anim.getContext();
    
    var amplitude = Math.PI / 4; // 45 degrees
    var period = 4000; //ms
    var theta = 0;
    var pendulumLength = 250;
    var pendulumWidth = 10;
    var rotationPointX = canvas.width / 2;
    var rotationPointY = 20;
    
    anim.setDrawStage(function () {
    // update
        theta = (amplitude * Math.sin((2 * Math.PI * this.getTime()) / period)) + Math.PI / 2;
    
    // clear
        this.clear();
    
    // draw top circle 
        context.beginPath();
        context.arc(rotationPointX, rotationPointY, 15, 0, 2 * Math.PI, false);
        context.fillStyle = "#5C0DAC";
        context.fill();
    
    // draw top inner circle
        context.beginPath();
        context.arc(rotationPointX, rotationPointY, 10, 0, 2 * Math.PI, false);
        context.fillStyle = "#FF00FF";
        context.fill();
    
    // draw shaft
        context.beginPath();
        var endPointX = rotationPointX + (pendulumLength * Math.cos(theta));
        var endPointY = rotationPointY + (pendulumWidth * Math.sin(theta));
        context.beginPath();
        context.moveTo(rotationPointX, rotationPointY);
        context.lineTo(endPointX, endPointY);
        context.lineWidth = pendulumWidth;
        context.lineCap = "round";
        context.strokeStyle = "#00FFFF";
        context.stroke();
    
    //draw bottom circle
        context.beginPath;
        context.arc(endPointX, endPointY, 40, 0, 2 * Math.PI, false);
        var grd = context.createLinearGradient(endPointX - 100, endPointY - 50, endPointX + 50, endPointY + 100);
    
        grd.addColorStop(0, "#FF00FF");
        grd.addColorStop(0.5, "#5C0DAC");
        grd.addColorStop(1, "#00FFFF");
        context.fillStyle = grd;
        context.fill();
    });
    
    anim.start();
};