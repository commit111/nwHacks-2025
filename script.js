const webcamButton = document.getElementById('webcamButton');
const liveView = document.getElementById('liveView');
const webcam = document.getElementById('webcam');

function enableCam(event) {
    if (!webcamButton.classList.contains('active')) {
        webcamButton.classList.add('active');
        event.target.textContent = 'Disable Webcam';
        liveView.style.display = 'block';

        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                var video = document.getElementById('video');
                if (video) {
                    video.srcObject = stream;
                    video.play();
                } else {
                    console.log("Video element not found");
                }
            })
            .catch((err) => {
                console.log("An error occurred: " + err);
            });
    } else {
        event.target.classList.remove('active');
        event.target.textContent = 'Enable Webcam';
        liveView.style.display = 'none';
        webcam.srcObject.getTracks().forEach(track => {
            track.stop();
        });
    }
}

function removeDisableButton() {
    webcamButton.removeEventListener('click', enableCam);
    webcamButton.remove();
}

webcamButton.addEventListener('click', (event) => {
    enableCam(event);
    removeDisableButton();
});
