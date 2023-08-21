var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Tirando sua selfie nos próximos 5 segundos";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
setTimeout()
var img_id, id="selfie1" ;
function take_snapshot(){
speak_data = "tirando sua selfie em 5 segundos";
//para professora:( -->
// nao faço ideia de como fazer os outros passos prof  nao faz sentido ter varias funçoes dentro de uma só sera que vc pode me ajudar na aula?

    }
}
