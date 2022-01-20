/* tslint:disable */
import {
  Person,
} from '.';

export interface Image {
  camera?: string;
  imageId?: number;
  lens?: string;
  magnification?: string;
  micrometeoritePrediction?: number;
  micrometeoritePredictionModelName?: string;
  photographer?: Person;
  photographyDate?: string;
  picture?: string;  // Base64-encoded contents of the avatar image
  recordingInstrument?: string;
}
