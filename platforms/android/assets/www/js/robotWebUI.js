function sendWs(what) {
	var loc = document.getElementById("location").value;
	if (loc === "") {
		loc = "192.168.43.54:8080";
	}
	var sock = new WebSocket("ws://"+loc);
	sock.onopen = function (event) {
    	sock.send(what);
    };
}