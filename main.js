noseX=0;
noseY=0;
difference=0;
left_w=0;
right_w=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);    
    canvas=createCanvas(500,450);
    canvas.position(800,200);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function draw(){    
    background("crimson");
    fill("#ffffff");
    stroke("#ffae00");
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log("PoseNet is initialized !!");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY"+noseY);
        left_w=results[0].pose.leftWrist.x;
        right_w=results[0].pose.rightWrist.x;
        difference=floor(left_w-right_w);
        console.log(left_w,right_w,difference);        
    }
}