import * as ts from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { startWebcam, takePicture, showResult } from './utils';

const captureButton = document.getElementById('pause');
const webcamButton = document.getElementById('webcam');
const videoElement = document.querySelector('video');

let model;

const init = async () => {
  model = await cocoSsd.load();
};

webcamButton.onclick = async () => await startWebcam(videoElement);
captureButton.onclick = () => takePicture(videoElement, predict);

const predict = async (imageElemnt) => {
  const predictions = await model.detect(imageElemnt);

  showResult(predictions);
};

init();
