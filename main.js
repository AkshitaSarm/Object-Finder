result_array = [];

function setup(){
    canvas = createCanvas(430, 320);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function Start(){
    objectDetctor = ml5.objectDetctor('cocossd', modelLoaded);
    document.getElementById("Status").innerHTML = "Status : Detecting Object ";
    obj = document.getElementById("objectName").value;
}

function modelLoaded(){
    console.log("Model is loaded!!");
    Status = true;
}

function draw(){
    image(video, 0, 0, 430, 320);
    if (Status != " "){
        objectDetctor.detect(video, gotResult);
    for (i = 0; i < result_array.length; i++){
        document.getElementById("Status").innerHTML = "Status : Object Detcted";
        fill("#FF0000");
        percent = floor(result_array[i].confidence * 100);
        text(result_array[i].label + " " + percent + "%" + result_array[i].x + 15 + result_array[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(result_array[i].width, result_array[i].height, result_array[i].x, result_array[i].x);
        obj();
    }
    }
}

function gotResult(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    result_array = results;
}