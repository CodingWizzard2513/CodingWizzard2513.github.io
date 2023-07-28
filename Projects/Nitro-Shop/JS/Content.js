function LoadShop(){
	var sfx = new Audio('Audio/button_click_1.mp3');
	sfx.play();
	document.write();
	setTimeout(function() {
 			var audio = new Audio('Audio/Audio.mp3');
			audio.play();
			audio.addEventListener('ended', function() {
    				this.currentTime = 0;
   			 	this.play();
			}, false);
	}, 1900);
}