function setup(){
    canvas = createCanvas(430, 320);
    canvas.center();
    video = createVideo(VIDEO);
    video.hide();

}

function Start(){
    objectDetctor = ml5.objectDetctor('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Status : Detecting Object ";
    var obj = document.getElementById("objectName").value;
}

function modelLoaded(){
    console.log("Model is loaded!!");
    Status = true;
}

function draw(){
    image(video, 0, 0, 430, 320);
}