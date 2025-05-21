var source = window.location.origin + "/Libraries/SirKingAccount/";

function LogIn() {
	var HTML = source + "login.html";
	var LogInPage = window.open(HTML, "_blank", "width=400,height=500");
	window.addEventListener('message', (event) => {
        	console.log('Received data:', event.data);
		if(event.data.type == "signup") {
			if(!event.data.email = "") {
				if(event.data.email.includes("@k12.vcsdny.org")) {
					LogInPage.postMessage({ type: 'error', error: 'school' }, '*');
				}
			}
		}
    	});
}
