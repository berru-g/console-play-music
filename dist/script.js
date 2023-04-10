var c = document.getElementById("console");

var txt = [
    "////4//////////////",
    "-------------------",
    "///////////////////",
    "-------------------",
    "///////////////////",
    "---------8---------",
    "///////////////////",
    "-------------------",
    "///////////////////",
    "----------9--------",
    "///////////////////",
    "-------------------",
    "///////////////////",
    "-------------------",
  
];

var docfrag = document.createDocumentFragment();

// Define audio files for each number
var audioFiles = {
  "0": "https://github.com/berru-g/Rick-MortySample/blob/master/PadMusical-master/public/rsc-mp3/Accords/audio_E.mp3?raw=true",
  "1": "https://github.com/berru-g/Rick-MortySample/blob/master/PadMusical-master/public/rsc-mp3/Accords/audio_Q.mp3?raw=true",
  "2": "https://github.com/berru-g/Rick-MortySample/blob/master/PadMusical-master/public/rsc-mp3/Accords/audio_R.mp3?raw=true",
  "3": "https://github.com/berru-g/Rick-MortySample/blob/master/PadMusical-master/public/rsc-mp3/Accords/audio_W.mp3?raw=true",
  "4": "https://github.com/berru-g/console-play-music/blob/master/src/son/FL_HHL_Green_078_Guitars.wav?raw=true",
  "5": "path/to/5.mp3",
  "6": "path/to/6.mp3",
  "7": "path/to/7.mp3",
  "8": "https://github.com/berru-g/Rick-MortySample/blob/master/PadMusical-master/public/rsc-mp3/808/808-clap-1.wav?raw=true",
  "9": "https://github.com/berru-g/Rick-MortySample/blob/master/PadMusical-master/public/rsc-mp3/808/808-bass-boom-kick-hi_G_major.wav?raw=true"
};

function updateScreen() {
    //Shuffle the "txt" array
    txt.push(txt.shift());
    //Rebuild document fragment
    txt.forEach(function(e) {
        var p = document.createElement("p");
        p.textContent = e;
        docfrag.appendChild(p);
    });
  
    //Clear DOM body
    while (c.firstChild) {
        c.removeChild(c.firstChild);
    }
    c.appendChild(docfrag);

    //Play audio file if number is displayed in the first line
    var num = /[0-9]/g;
    //var str = c.textContent.split("\n")[0]; 
  var str = c.firstElementChild.textContent;

  //Get first line of text
    var match = str.match(num);
    if (match !== null) {
        var audioFile = audioFiles[match[0]];
        if (audioFile) {
            var audio = new Audio(audioFile);
            audio.play();
        }
    }
}

var intervalID = window.setInterval(updateScreen, 500);