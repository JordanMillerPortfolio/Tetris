var canvas, context, tetPiece;
var up, dwn, left, right;

var tetPiece1,
	tetPiece2,
	tetPiece3,
	tetPiece4;

function init() {
	canvas = document.getElementById("canvas");
	canvas.width = (128 * 2);
	canvas.height = (128 * 4);
	context = canvas.getContext("2d");

	tetPiece1 = document.getElementById("tetrisPiece1");
	tetPiece2 = document.getElementById("tetrisPiece2");
	tetPiece3 = document.getElementById("tetrisPiece3");
	tetPiece4 = document.getElementById("tetrisPiece4");

	
	drawBackground();


    document.addEventListener("keydown", function (e) {
        switch (e.keyCode) {

        	case 37:
                left = true;
                break;

            case 38:
                up = true;
                break;

            case 39:
                right = true;
                break;

            case 40:
                dwn = true;
                break;
        }
    })

    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {

        	case 37:
                left = false;
                break;

            case 38:
                up = false;
                break;

            case 39:
                right = false;
                break;

            case 40:
                dwn = false;
                break;
        }
    })

    drawPiece(0, 0, 0, 0);

    drawPiece(1, 0, 0, 3);

    drawPiece(2, 0, 0, 6);

    drawPiece(3, 0, 0, 9);

    drawPiece(2, 0, 2, 9);

    setInterval(update, 2);
}

function drawBackground() {
	context.fillStyle = "#000000";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.strokeStyle = "#FFFFFF";
	for(var x = 0; x < (canvas.width / 32); x++) {
		for(var y = 0; y < (canvas.height / 32); y++) {
			context.strokeRect(x * 32, y * 32, (x * 32) + 32, (y * 32) + 32);
		}
	}
	
}

function drawPiece(type, rotation, x, y) {

	xx = x * 32;
	yy = y * 32;

	if(type == 0) {
		context.drawImage(tetPiece1, xx, yy);
		context.drawImage(tetPiece1, xx + 32, yy);
		context.drawImage(tetPiece1, xx + 64, yy);
		context.drawImage(tetPiece1, xx + 64, yy + 32);
	}

	if(type == 1) {
		context.drawImage(tetPiece2, xx, yy);
		context.drawImage(tetPiece2, xx + 32, yy);
		context.drawImage(tetPiece2, xx, yy + 32);
		context.drawImage(tetPiece2, xx + 32, yy + 32);
	}

	if(type == 2) {
		if(rotation == 0) {
			context.drawImage(tetPiece3, xx, yy);
			context.drawImage(tetPiece3, xx + 32, yy);
			context.drawImage(tetPiece3, xx + 32, yy + 32);
			context.drawImage(tetPiece3, xx + 64, yy);
		}

		if(rotation == 1) {
			context.drawImage(tetPiece3, xx, yy);
			context.drawImage(tetPiece3, xx, yy + 32);
			context.drawImage(tetPiece3, xx + 32, yy + 32);
			context.drawImage(tetPiece3, xx, yy + 64);
		}

		if(rotation == 2) {
			context.drawImage(tetPiece3, xx, yy);
			context.drawImage(tetPiece3, xx + 32, yy);
			context.drawImage(tetPiece3, xx + 32, yy - 32);
			context.drawImage(tetPiece3, xx + 64, yy);
		}

		if(rotation == 3) {
			context.drawImage(tetPiece3, xx + 32, yy);
			context.drawImage(tetPiece3, xx, yy + 32);
			context.drawImage(tetPiece3, xx + 32, yy + 32);
			context.drawImage(tetPiece3, xx + 32, yy + 64);
		}
	}

	if(type == 3) {
		context.drawImage(tetPiece4, xx, yy);
		context.drawImage(tetPiece4, xx + 32, yy);
		context.drawImage(tetPiece4, xx + 32, yy + 32);
		context.drawImage(tetPiece4, xx + 64, yy + 32);
	}
}

function keyBindings() {
	}


function update() {

}