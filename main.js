Webcam.set({
  width:350,
  height:300,
  image_format : 'png',
  png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function tirarFoto(){
Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML =
'<img id="captured_image" src="'+ data_uri + '"/>';
});
}

console.log('Versão do ML5 =', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/BGqUrY9bQ/model.json', modelLoaded);

function modelLoaded(){
  console.log('Modelo carregado');
}
function checar(){
 img = document.getElementById('captured_image'); 
 classifier.classify(img, gotResult);
}
function gotResult(error, results){
  if(error){
    console.log(error);
  }
  else {
    console.log(results);
    document.getElementById("resulteOBJ").innerHTML = results[0].label;
    document.getElementById("resultePRE").innerHTML = results[0].confidence.toFixed(3);
  }
}


