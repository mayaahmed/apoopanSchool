var string1= "That night a thief after plundering the neighborhood was wondering whether to make a last stop at Apoopan's house.";
var string2 = " He paused outside Apoopan's house, hesitating, because his hands were full of loot. ";

var string3 = " He was shocked when he heard Apoopan suddenly asking 'Who are you?' ";


var string4 = "Apoopan had woken up in the middle of the night to make sure he remembered his lesson well.";

var string5 = " 'Go away' said Apoopan remembering the next sentence.";

var string6 = " Then Apoopan forgot what the third line was. ";

var string7 = " The thief was frightened and he was slowly going to run away "; 

var string8 = " when Apoopan in his joy of remembering the third sentence shouted loudly";

var string9 = " 'I will hit you with a stick.' ";

var string10 = " This scared the thief big time. He dropped his loot and ran away with all his might.";





	

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
