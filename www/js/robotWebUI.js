var speed = 0;
var speedRobot = "Low";
var loc = document.getElementById("location").value;

function setSpeed(sp) {
	switch(sp){
		case 20:
			speed = sp;
			speedRobot = "Low";
			break;
		case 50:
			speed = sp;
			speedRobot = "Medium";
			break;
		case 100:
			speed = sp;
			speedRobot = "High";
			break;
		default:
			speed = 20;
			speedRobot = "Low";
	}
	speed = sp;
	document.getElementById("speed").value = speed + "%";
}

function setWs() {
  	if ("WebSocket" in window) {
		if (loc === "") {
			loc = "192.168.43.54:8080";
		}
		var sock = new WebSocket("ws://"+loc);
     	sock.onopen = function() {
        	// Web Socket is connected, send data using send()
        	javascript:window.open('control.html','_self');
     	};
     	sock.onmessage = function (evt)	{
        	var received_msg = evt.data;
     	};
     	sock.onclose = function() {
        	alert("Connection Closed");
     	};
     	sock.onerror = function(error) {
     		alert("Connection Error");
     	}
	} else {
		alert("Your does not support WebSocket");
		navigator.app.exitApp();
	}
}

function sendWs(what) {
	if (what.indexOf("-") >= 0) {
		what += speedRobot;
	}
	sock.send(what);
}