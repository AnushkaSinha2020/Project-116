function preload(){}

function setup(){
    canvas= createCanvas(500,500);
    canvas.position(500,150);
    video= createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video, 0, 0, 500, 500);
}

function take_snapshot(){
    save("MySelfie.png");
}