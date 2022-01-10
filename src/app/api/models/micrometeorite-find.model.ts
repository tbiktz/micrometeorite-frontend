/* tslint:disable */
import {
  Image,
  Person,
} from '.';

export interface MicrometeoriteFind {
  images?: Image[];
  micrometeoriteChemicalComposition?: string;
  micrometeoriteDiameter?: number;
  micrometeoriteFindComment?: string;
  micrometeoriteFindCoordinates?: number;
  micrometeoriteFindDate?: string;
  micrometeoriteFindFinder?: Person;
  micrometeoriteFindId?: number;
  micrometeoriteFindPlace?: string;
  micrometeoriteFindPlaceDescription?: string;
  micrometeoriteFindRecorder?: Person;
  micrometeoriteForm?: string;
  micrometeoriteWeight?: number;
}
