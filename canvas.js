
//if statement checks for canvas; else statement provides fallback
/*
if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
} else {
    //fallback code
}
*/

window.onload = function draw() {

        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.fillStyle = 'rgb(200, 0, 0)';
            ctx.fillRect(10, 10, 50, 50);

            ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
            ctx.fillRect(30, 30, 50, 40);

            /*rectangle functions
             fillRect(x, y, width, height)
             strokeRect(x, y, width, height)
             clearRect(x, y, width, height)
             */

            ctx.fillRect(100, 30, 30, 50);
            ctx.strokeRect(140, 30, 40, 40);
            ctx.fillRect(200, 30, 60, 50);
            ctx.clearRect(210, 40, 20, 30);

            /*arc functions
            arc(x, y, radius, startAngle, endAngle, anticlockwise)
            arcTo(x1, y1, x2, y2, radius)

            angles are measure in radians -- radians = (Math.PI/180)*degrees

            endAngle at 2 * Math.PI for circles
            */


            ctx.beginPath();
            ctx.arc(50, 110, 30, 0, Math.PI * 2, true); // Outer circle
            ctx.moveTo(70, 110);
            ctx.arc(50, 110, 20, 0, Math.PI, false);  // Mouth (clockwise)
            ctx.moveTo(45, 95);
            ctx.arc(40, 95, 5, 0, Math.PI * 2, true);  // Left eye
            ctx.moveTo(60, 95);
            ctx.arc(55, 95, 5, 0, Math.PI * 2, true);  // Right eye
            ctx.stroke();
    }

}

