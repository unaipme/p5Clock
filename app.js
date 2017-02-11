var clockDiam;
var appWidth, appHeight;

function setup() {
	appWidth = (windowWidth > 300) ? windowWidth : 300;
	appHeight = (windowHeight > 300) ? windowHeight : 300;
	createCanvas(appWidth, appHeight);
	stroke("#3F51B5");
	clockDiam = calculateDiameter();
}

function draw() {
	let centerX = windowWidth * 0.5, centerY = windowHeight * 0.5;
	let radiusSize = clockDiam / 2;
	background("#C5CAE9");
	strokeWeight(1);
	fill(255);
	ellipse(centerX, centerY, clockDiam, clockDiam);
	fill("#3F51B5");
	ellipse(centerX, centerY, 3, 3);
	drawSecondHand(centerX, centerY, radiusSize * 0.25);
	drawMinuteHand(centerX, centerY, radiusSize * 0.95);
	drawHourHand(centerX, centerY, radiusSize * 0.7);
}

function windowResized() {
	appWidth = (windowWidth > 300) ? windowWidth : 300;
	appHeight = (windowHeight > 300) ? windowHeight : 300;
	resizeCanvas(appWidth, appHeight);
	clockDiam = calculateDiameter();
}

function calculateDiameter() {
	if (appWidth > appHeight) {
		return appHeight * 0.8;
	} else {
		return appWidth * 0.8;
	}
}

function drawSecondHand(centerX, centerY, size) {
	strokeWeight(1);
	line(centerX, centerY, centerX + (size * cos(radians(second() * 6 - 90))), centerY + (size * sin(radians(second() * 6 - 90))));
}

function drawMinuteHand(centerX, centerY, size) {
	strokeWeight(3);
	line(centerX, centerY, centerX + (size * cos(radians(minute() * 6 - 90))), centerY + (size * sin(radians(minute() * 6 - 90))));
}

function drawHourHand(centerX, centerY, size) {
	strokeWeight(6);
	line(centerX, centerY, centerX + (size * cos(radians(hour() * 30 - 90))), centerY + (size * sin(radians(hour() * 30 - 90))));
}