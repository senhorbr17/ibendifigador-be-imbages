//https://teachablemachine.withgoogle.com/models/ziTC2W9aK/
Webcam.attach("#camera")
camera = document.getElementById("camera")
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
})
function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="imagem" src="' + data_uri + '"/>'
    })
}
console.log(ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ziTC2W9aK/model.json",modelocarregado)
function modelocarregado(){
    console.log("deucerto")
}
function check(){
    img=document.getElementById("imagem")
    classifier.classify(img,obterResultado)
}
function obterResultado(error,results){
    if(error){
        console.error(error)
    }else{
        console.log(results)
        document.getElementById("resultObjectName").innerHTML=results[0].label
        document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence.toFixed(2) 
    }
}