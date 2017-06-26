function areaOfRect(w,h) {
	return w*h;
}

function areaOfCircle(r) {
	// area = pi*r^2
	// Math.pow(r,2) = r*r = r^2
	return Math.PI * Math.pow(r,2);
}

// Exprort our area functions
exports.areaOfRect = areaOfRect;
exports.areaOfCircle = areaOfCircle;
