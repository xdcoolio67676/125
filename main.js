noseX=0
noseY=0
function preload()
{
    mustache_nose=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')  
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video =createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log('PoseNet is Initilized');
}
function draw(){
image(video,0,0,300,300)
image(mustache_nose,noseX,noseY,25,25)
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x -10;
        noseY=results[0].pose.nose.y -10;
        console.log("nose x ="+ noseX );
        console.log("nose y="+noseY );
        console.log("nose x =" + results [0].pose.nose.x );
        console.log("nose y =" + results[0].pose.nose.y );   
    }
}
