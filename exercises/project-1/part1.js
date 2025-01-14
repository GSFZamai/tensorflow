import * as ts from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { handleFilePicker, showResult } from './utils';

let model;

async function init() {
  model = await cocoSsd.load();

  handleFilePicker(predict);
}

const predict = async (imageElement) => {
  const prediction = await model.detect(imageElement);

  showResult(prediction);
};

init();
