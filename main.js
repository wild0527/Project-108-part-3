music1 = "";
music2 = "";

rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload() {
    song1 = loadSong("music.mp3");
    song2 = loadSong("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = create(VIDEO);
    video.hide();

    posNet = ml5.posNet(video, modelLoaded);
    posNet.on("pose", gotPoses);


}

function modelLoaded() {
    console.log("model is initialized");
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

    }
}