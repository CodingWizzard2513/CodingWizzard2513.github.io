//JQuery Setup
var jq = document.createElement("script");
jq.src = "https://code.jquery.com/jquery-3.6.0.min.js";
jq.type = "text/javascript";
jq.onload = function () {
    console.log("jQuery loaded successfully!");
};
document.head.appendChild(jq);



var source = window.location.origin + "/Libraries/SirKingAccount/";

function LogIn() {
	var HTML = source + "login.html";
	var LogInPage = window.open(HTML, "_blank", "width=400,height=500");
	window.addEventListener('message', (event) => {
        console.log('Received data:', event.data);
		if(event.data.type == "signup") {
			if(!event.data.email == "") {
				if(event.data.email.endsWith("@k12.vcsdny.org")) { 
					LogInPage.postMessage({ type: 'error', error: 'school' }, '*');
				}
			}

			var PHP = source + "requests.php";
			$.ajax({
		            type : "POST", 
		            url  : PHP,
		            data : event.data,
		            success: function(res){  
				    LogInPage.postMessage({ type: 'success' }, '*');
		        	}
			});
    	}
    });
}
