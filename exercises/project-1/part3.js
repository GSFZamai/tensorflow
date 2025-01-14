import * as ts from '@tensorflow/tfjs';
import * as faceDetector from '@tensorflow-models/face-detection';
import { startWebcam, takePicture, drawFaceBox } from './utils';

const captureButton = document.getElementById('pause');
const webcamButton = document.getElementById('webcam');
const videoElement = document.querySelector('video');

webcamButton.onclick = async () => await startWebcam(videoElement);
captureButton.onclick = () => takePicture(videoElement, predict);

let model, detector;

const init = async () => {
  model = faceDetector.SupportedModels.MediaPipeFaceDetector;
  detector = await faceDetector.createDetector(model, {
    runtime: 'tfjs',
  });
};

const predict = async (photo) => {
  const faces = await detector.estimateFaces(photo);
  console.log(faces);
  drawFaceBox(photo, faces);
};

init();
