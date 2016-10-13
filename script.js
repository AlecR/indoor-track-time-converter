var mUtoF = {"200m": .9872,
			 "400m": .9901,
			 "500m": .9909,
			 "600y": .9912,
			 "600m": .9915,
			 "800m": .9923,
			 "1000m": .9929,
			 "mile": .9941,
			 "3000m": .9953,
			 "5000m": .9961,
			 "4x400m": .9901,
			 "4x800m": .9923,
			 "dmr": .9931
			 };
var mBOtoF = {"200m": 1.0179,
			 "400m": 1.0160,
			 "500m": 1.0154,
			 "600y": 1.0152,
			 "600m": 1.0150,
			 "800m": 1.0143,
			 "1000m": 1.0138,
			 "mile": 1.0128,
			 "3000m": 1.0116,
			 "5000m": 1.0107,
			 "4x400m": 1.0160,
			 "4x800m": 1.0143,
			 "dmr": 1.0136
			 };
var mUtoBO = {"200m": .9698,
			 "400m": .9746,
			 "500m": .9758,
			 "600y": .9763,
			 "600m": .9768,
			 "800m": .9783,
			 "1000m": .9794,
			 "mile": .9816,
			 "3000m": .9839,
			 "5000m": .9855,
			 "4x400m": .9746,
			 "4x800m": .9783,
			 "dmr": .9798
			 };
var mFtoBO = {"200m": .9828,
			 "400m": .9843,
			 "500m": .9848,
			 "600y": .9850,
			 "600m": .9852,
			 "800m": .9859,
			 "1000m": .9864,
			 "mile": .9874,
			 "3000m": .9885,
			 "5000m": .9894,
			 "4x400m": .9843,
			 "4x800m": .9859,
			 "dmr": .9866
			 };
var fUtoF = {"200m": .9900,
			 "400m": .9929,
			 "500m": .9937,
			 "600y": .9940,
			 "600m": .9943,
			 "800m": .9951,
			 "1000m": .9958,
			 "mile": .9969,
			 "3000m": .9981,
			 "5000m": .9989,
			 "4x400m": .9929,
			 "4x800m": .9951,
			 "dmr": .9959
			 };
var fBOtoF = {"200m": 1.0155,
			 "400m": 1.0133,
			 "500m": 1.0127,
			 "600y": 1.0125,
			 "600m": 1.0122,
			 "800m": 1.0115,
			 "1000m": 1.0109,
			 "mile": 1.0099,
			 "3000m": 1.0086,
			 "5000m": 1.0077,
			 "4x400m": 1.0133,
			 "4x800m": 1.0115,
			 "dmr": 1.0107
			 };
var fUtoBO = {"200m": .9749,
			 "400m": .9799,
			 "500m": .9812,
			 "600y": .9818,
			 "600m": .9823,
			 "800m": .9838,
			 "1000m": .9850,
			 "mile": .9871,
			 "3000m": .9896,
			 "5000m": .9913,
			 "4x400m": .9799,
			 "4x800m": .9838,
			 "dmr": .9853
			 };
var fFtoBO = {"200m": .9847,
			 "400m": .9869,
			 "500m": .9874,
			 "600y": .9877,
			 "600m": .9879,
			 "800m": .9886,
			 "1000m": .9892,
			 "mile": .9902,
			 "3000m": .9915,
			 "5000m": .9924,
			 "4x400m": .9869,
			 "4x800m": .9886,
			 "dmr": .9894
			 };

(adsbygoogle = window.adsbygoogle || []).push({});

function convertTime() {
	var uToFButton = document.getElementById("utof");
	var boToFButton = document.getElementById("botof");
	var uToBOButton = document.getElementById("utobo");
	var fToBOButton = document.getElementById("ftobo");

	var maleButton = document.getElementById("male-radio-button");
	var femaleButton = document.getElementById("female-radio-button");

	var eventSelector = document.getElementById("event-selector");

	var minInput = document.getElementById("min-input");
	var secInput = document.getElementById("sec-input");

	var minutes;
	var seconds;

	if(minInput.value == "") {
		minutes = 0;
	} else {
		minutes = minInput.value;
	}

	if(secInput.value == "") {
		seconds = 0;
	} else {
		seconds = secInput.value;
	}

	var totalTimeInSeconds = (minutes * 60) + Number(seconds);

	if(eventSelector.value == "Select Event") {
		alert("Event not selected")
	}else if (minInput.value == "" && secInput.value == "" || secInput.value > 59 || secInput.value < 0 || minInput.value < 0) {
		alert("Input a valid time");
	} else {
		if(maleButton.checked) {
			if(uToFButton.checked) {
				calculateTime(mUtoF[eventSelector.value], totalTimeInSeconds, "Undersized", "Flat");
			}else if(boToFButton.checked) {
				calculateTime(mBOtoF[eventSelector.value], totalTimeInSeconds, "Banked/Oversized", "Flat");
			}else if(uToBOButton.checked) {
				calculateTime(mUtoBO[eventSelector.value], totalTimeInSeconds, "Undersized", "Banked/Oversized");
			}else if(fToBOButton.checked) {
				calculateTime(mFtoBO[eventSelector.value], totalTimeInSeconds, "Flat", "Banked/Oversized");
			}
		} else if (femaleButton.checked) {
			if(uToFButton.checked) {
				calculateTime(fUtoF[eventSelector.value], totalTimeInSeconds, "Undersized", "Flat");
			}else if(boToFButton.checked) {
				calculateTime(fBOtoF[eventSelector.value], totalTimeInSeconds, "Banked/Oversized", "Flat");
			}else if(uToBOButton.checked) {
				calculateTime(fUtoBO[eventSelector.value], totalTimeInSeconds, "Undersized", "Banked/Oversized");
			}else if(fToBOButton.checked) {
				calculateTime(fFtoBO[eventSelector.value], totalTimeInSeconds, "Flat", "Banked/Oversized");
			}
		}
	}
}

function calculateTime(ratio, timeInSeconds, originalTrack, convertedTrack) {
	var mins = timeInSeconds / 60;
	var seconds = timeInSeconds % 60;

	console.log(seconds.toFixed(2).toString());
	console.log(seconds.toFixed(2).toString().length);

	var convertedTime = ratio * timeInSeconds;
	var convertedMins = convertedTime / 60;
	var convertedSeconds = convertedTime % 60;

	var timeDifference = (convertedTime - timeInSeconds).toFixed(2);
	var timeDifferenceString = "";

	if(timeDifference > 0) {
		timeDifferenceString = "+" + timeDifference;
		document.getElementById("time-difference").className = "positive-change";
	} else {
		timeDifferenceString = timeDifference;
		document.getElementById("time-difference").className = "negative-change";
	}

	document.getElementById("time-difference").innerHTML =  timeDifferenceString + " s";
	document.getElementById("original-track").innerHTML = originalTrack;
	document.getElementById("converted-track").innerHTML = convertedTrack;

	document.getElementById("arrow-image-cell").innerHTML = "<img id=\"arrow-image\"src=\"arrow.png\">";
	document.getElementById("original-time-text").innerHTML = parseInt(mins) + ":" + padSeconds(seconds.toFixed(2));
	document.getElementById("converted-time-text").innerHTML = parseInt(convertedMins) + ":" + padSeconds(convertedSeconds.toFixed(2));

}

function padSeconds(seconds) {
	if(seconds.toString().length < 5) {
		return "0" + seconds;
	} else {
		return seconds;
	}
}



