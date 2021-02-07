/*
window.onload = function () { }
*/

//if statement checks for canvas; else statement provides fallback
/*
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
} else {
    //fallback code
}
*/
/*
function draw() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContex('2d');
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    ctx.fillRect(30, 30, 50, 50);
}
*/

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(30, 30, 50, 50);
    }
}