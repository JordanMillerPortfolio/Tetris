var canvas, context, tetPiece;
var rup, rdwn;

function init() {
	canvas = document.getElementById("canvas");
	canvas.width = (128 * 2);
	canvas.height = (128 * 4);
	context = canvas.getContext("2d");
	tetPiece = document.getElementById("tetrisPiece");
	drawBackground();


    document.addEventListener("keydown", function (e) {
        switch (e.keyCode) {
            case 38:
                rup = true;
                break;

            case 40:
                rdwn = true;
                break;
        }
    })

    document.addEventListener("keyup", function (e) {
        switch (e.keyCode) {
            case 38:
                rup = false;
                break;

            case 40:
                rdwn = false;
                break;
        }
    })

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

function drawPiece(type, x, y) {

	xx = x * 32;
	yy = y * 32;

	if(type == 0) {
		context.drawImage(tetPiece, xx, yy);
		context.drawImage(tetPiece, xx + 32, yy);
		context.drawImage(tetPiece, xx + 64, yy);
		context.drawImage(tetPiece, xx + 64, yy + 32);
	}

	if(type == 1) {
		context.drawImage(tetPiece, xx, yy);
		context.drawImage(tetPiece, xx + 32, yy);
		context.drawImage(tetPiece, xx, yy + 32);
		context.drawImage(tetPiece, xx + 32, yy + 32);
	}
}

var yy = 0;

function update() {

}