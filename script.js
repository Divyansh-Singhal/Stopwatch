var hour = 00;
var minute = 00;
var second = 00;
var count = 00;

function start() {
	timer = true;
	stopWatch();
}
function stop() {
	timer = false;
}

function reset() {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
}

function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		var hrstr = hour;
		var minstr = minute;
		var secstr = second;
		var countstr = count;

		if (hour < 10) {
			hrstr = "0" + hrstr;
		}

		if (minute < 10) {
			minstr = "0" + minstr;
		}

		if (second < 10) {
			secstr = "0" + secstr;
		}

		if (count < 10) {
			countstr = "0" + countstr;
		}

		document.getElementById('hr').innerHTML = hrstr;
		document.getElementById('min').innerHTML = minstr;
		document.getElementById('sec').innerHTML = secstr;
		document.getElementById('count').innerHTML = countstr;
		setTimeout(stopWatch, 10);
	}
}
