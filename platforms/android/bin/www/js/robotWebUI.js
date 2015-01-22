function sendWs(what) {
	var loc = document.getElementById("location").value;
	if (loc === "") {
		loc = "192.168.1.18:8080";
	}
	var sock = new WebSocket("ws://"+loc);
	sock.onopen = function (event) {
    	sock.send(what);
    };
}