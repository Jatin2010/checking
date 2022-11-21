Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90

});

camera = document.getElementById("camera");
Webcam.attach(camera);

function click(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="taken_image" src="'+data_uri+'"/>';
});
}

console.log('ml5version:',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/cjc72ae7q/model.json',modelLoaded);

function modelLoaded(){
    console.log("model loaded")
}

function check(){
    img= document.getElementById("taken_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results) {
if (error) {
    console.log(error);
} else {
    console.log(results);t
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confiedence.toFixed(3);
}
}


