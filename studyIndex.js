var string1= " Apoopan decided to be a really good student. He wanted to learn the first lesson very well.";
var string2 = "  He kept repeating all day 'Who are you? Go away. I will hit you with a stick.' ";
var string3 = "Apoopan said these sentences over and over again till he went to bed.";






	

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
