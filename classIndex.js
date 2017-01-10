var string1= " The next day Apoopan went to school really early and sat in the first bench in the Kindergarten class. ";

var string2 = " When the class teacher arrived he was surprised to see an old man sitting in the class.";

var string3 = " 'Who are you?' asked the class teacher. ";

var string4 =  "Apoopan thought that the teacher was teaching him sentences and he repeated 'Who are you?'";

var string5 = " The teacher got a little annoyed because he thought that Apoopan was teasing him.";

var string6 = " 'Go away' said the class teacher. Apoopan repeated 'Go away.' ";

var string7 =  "The teacher was an ill tempered man. He got very angry and shouted 'I will hit you with a stick.' ";

var string8 =  "Apoopan repeated 'I will hit you with a stick.' ";

var string9 = "But before anything further could happen the school bell rang for prayers. ";
var string10 = " Apoopan thought that the school was dismissed for the day and he headed back home.";






	

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

                var msg6 = new SpeechSynthesisUtterance();
                initializeMsg(msg6);
                msg6.text = string6;
               	window.speechSynthesis.speak(msg6);

                var msg7 = new SpeechSynthesisUtterance();
                initializeMsg(msg7);
                msg7.text = string7;
                window.speechSynthesis.speak(msg7);
     
                var msg8 = new SpeechSynthesisUtterance();
                initializeMsg(msg8);           
                msg8.text = string8;
                window.speechSynthesis.speak(msg8);  

    var msg9 = new SpeechSynthesisUtterance();
                initializeMsg(msg9);
				msg9.text = string9;
				window.speechSynthesis.speak(msg9);

                var msg10 = new SpeechSynthesisUtterance();
                initializeMsg(msg10);
                msg10.text = string10;
               	window.speechSynthesis.speak(msg10);
                
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
