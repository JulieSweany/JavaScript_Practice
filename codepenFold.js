
window.onload = function draw() {

        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            
            // Create gradients
            var lingrad = ctx.createLinearGradient(50, 0, 80, 200);
            lingrad.addColorStop(0, '#ffffff');
            lingrad.addColorStop(0.5, '#ffffff');
            lingrad.addColorStop(1, '#999999');

            var lingrad2 = ctx.createLinearGradient(100, 20, 100, 90);
            lingrad2.addColorStop(0, '#ffffff');
            lingrad2.addColorStop(1, '#666666');

            // assign gradients to fill style
            ctx.fillStyle = lingrad2;

            // draw shapes

            // middle dark shape
            ctx.moveTo(18, 85);
            ctx.lineTo(230, 41);
            ctx.lineTo(225, 58);
            ctx.lineTo(18, 90);

            ctx.fill();

            // lowest dark shape
            ctx.beginPath();
            ctx.moveTo(15, 88);
            ctx.lineTo(140, 90);
            ctx.lineTo(110, 105);
            ctx.lineTo(7, 90);
            ctx.fill();

            //reset fill to lighter greadient
            ctx.fillStyle = lingrad;

            //top shape
            ctx.beginPath();
            ctx.moveTo(18, 88);
            ctx.lineTo(7, 90);
            ctx.lineTo(6, 87);
            ctx.lineTo(18, 82);
            ctx.lineTo(170, 30);
            ctx.lineTo(210, 20);//topmost point
            ctx.lineTo(230, 42);
            ctx.lineTo(19, 86);
            ctx.lineTo(15, 88);
            ctx.fill();

            

            //middle light shape
            ctx.beginPath();
            ctx.moveTo(15, 88);
            ctx.lineTo(215, 90);
            ctx.lineTo(265, 80);//rightmost point
            ctx.lineTo(240, 55);
            ctx.lineTo(19, 86);
            ctx.fill();

            
            /*
            // Create gradients
            var lightestgrad = ctx.createLinearGradient(0, 0, 150, 150);
            lightestgrad.addColorStop(0, '#000000');
            lightestgrad.addColorStop(1, '#cccccc');

            var darkestgrad = ctx.createLinearGradient(0, 50, 0, 95);
            darkestgrad.addColorStop(0, '#666666');
            darkestgrad.addColorStop(1, '#333333');

            // assign gradients to fill and stroke styles
            ctx.fillStyle = darkestgrad;
            ctx.strokeStyle = lingrad2;

            // draw shapes
            ctx.fillRect(10, 10, 130, 130);
            ctx.strokeRect(50, 50, 50, 50);
            */
    }

}

