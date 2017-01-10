var string1= " When Apoopan got up in the morning he found a small treasure outside his house.";
var string2 = " Apoopan turned over the stolen wealth to the police, and they gave him a big reward.";
var string3 = " The reward was enough to take care of the expenses of the old couple for a long time.";

var string4 = " 'I made enough money. I do not need to go to school anymore' said Apoopan.";

var string5 = " 'Even one day of education brought us prosperity' concluded Amooma.";








	

			function checkCompatibilty () {
				if(!('speechSynthesis' in window)){
					alert('Your browser is not supported. If google chrome, please upgrade!!');
				}
			};

			checkCompatibilty();

			var voiceOptions = document.getElementById('voiceOptions');
			var volumeSlider = document.getElementById('volumeSlider');
			var rateSlider = document.getElementById('rateSlider');
			var pitchSlider = document.getElementById('pitchSlider');
var myText = document.getElementById('myText');

			var voiceMap = [];

			function loadVoices () {
				var voices = speechSynthesis.getVoices();
				for (var i = 0; i < voices.length; i++) {
					var voice = voices[i];
					var option = document.createElement('option');
					option.value = voice.name;
					option.innerHTML = voice.name;
					voiceOptions.appendChild(option);
					voiceMap[voice.name] = voice;
				};
			};

			window.speechSynthesis.onvoiceschanged = function(e){
				loadVoices();
			};



function initializeMsg(msg){
  msg.volume = volumeSlider.value;
				msg.voice = voiceMap[voiceOptions.value];
                msg.rate = rateSlider.value;
				msg.Pitch = pitchSlider.value;
}

function speak(){
                
                var msg1 = new SpeechSynthesisUtterance();
                initializeMsg(msg1);
				msg1.text = string1;
				window.speechSynthesis.speak(msg1);
                var msg2 = new SpeechSynthesisUtterance();
                initializeMsg(msg2);
                msg2.text = string2;
               	window.speechSynthesis.speak(msg2);
var msg3 = new SpeechSynthesisUtterance();
                initializeMsg(msg3);
                msg3.text = string3;
               	window.speechSynthesis.speak(msg3);
               
    var msg4 = new SpeechSynthesisUtterance();
                initializeMsg(msg4);
                msg4.text = string4;
               	window.speechSynthesis.speak(msg4);
var msg5 = new SpeechSynthesisUtterance();
                initializeMsg(msg5);
                msg5.text = string5;
               	window.speechSynthesis.speak(msg5);          
                
};


			

speak();

function stop(){
speechSynthesis.cancel();
}

function pause(){
speechSynthesis.pause();
}

function resume(){
speechSynthesis.resume();
}
