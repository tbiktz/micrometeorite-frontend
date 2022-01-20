/* tslint:disable */

import * as models from '../models';

/* pre-prepared guards for build in complex types */

function _isBlob(arg: any): arg is Blob {
  return arg != null && typeof arg.size === 'number' && typeof arg.type === 'string' && typeof arg.slice === 'function';
}

export function isFile(arg: any): arg is File {
return arg != null && typeof arg.lastModified === 'number' && typeof arg.name === 'string' && _isBlob(arg);
}

/* generated type guards */

export function isImage(arg: any): arg is models.Image {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // camera?: string
    ( typeof arg.camera === 'undefined' || typeof arg.camera === 'string' ) &&
    // imageId?: number
    ( typeof arg.imageId === 'undefined' || typeof arg.imageId === 'number' ) &&
    // lens?: string
    ( typeof arg.lens === 'undefined' || typeof arg.lens === 'string' ) &&
    // magnification?: string
    ( typeof arg.magnification === 'undefined' || typeof arg.magnification === 'string' ) &&
    // micrometeoritePrediction?: number
    ( typeof arg.micrometeoritePrediction === 'undefined' || typeof arg.micrometeoritePrediction === 'number' ) &&
    // micrometeoritePredictionModelName?: string
    ( typeof arg.micrometeoritePredictionModelName === 'undefined' || typeof arg.micrometeoritePredictionModelName === 'string' ) &&
    // photographer?: Person
    ( typeof arg.photographer === 'undefined' || isPerson(arg.photographer) ) &&
    // photographyDate?: string
    ( typeof arg.photographyDate === 'undefined' || typeof arg.photographyDate === 'string' ) &&
    // picture?: string
    ( typeof arg.picture === 'undefined' || typeof arg.picture === 'string' ) &&
    // recordingInstrument?: string
    ( typeof arg.recordingInstrument === 'undefined' || typeof arg.recordingInstrument === 'string' ) &&

  true
  );
  }

export function isImageResult(arg: any): arg is models.ImageResult {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // imageId?: number
    ( typeof arg.imageId === 'undefined' || typeof arg.imageId === 'number' ) &&
    // micrometeoritePrediction?: number
    ( typeof arg.micrometeoritePrediction === 'undefined' || typeof arg.micrometeoritePrediction === 'number' ) &&
    // micrometeoritePredictionModelName?: string
    ( typeof arg.micrometeoritePredictionModelName === 'undefined' || typeof arg.micrometeoritePredictionModelName === 'string' ) &&

  true
  );
  }

export function isMicrometeoriteFind(arg: any): arg is models.MicrometeoriteFind {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // images?: Image[]
    ( typeof arg.images === 'undefined' || (Array.isArray(arg.images) && arg.images.every((item: unknown) => isImage(item))) ) &&
    // micrometeoriteChemicalComposition?: string
    ( typeof arg.micrometeoriteChemicalComposition === 'undefined' || typeof arg.micrometeoriteChemicalComposition === 'string' ) &&
    // micrometeoriteDiameter?: number
    ( typeof arg.micrometeoriteDiameter === 'undefined' || typeof arg.micrometeoriteDiameter === 'number' ) &&
    // micrometeoriteFindComment?: string
    ( typeof arg.micrometeoriteFindComment === 'undefined' || typeof arg.micrometeoriteFindComment === 'string' ) &&
    // micrometeoriteFindCoordinates?: number
    ( typeof arg.micrometeoriteFindCoordinates === 'undefined' || typeof arg.micrometeoriteFindCoordinates === 'number' ) &&
    // micrometeoriteFindDate?: string
    ( typeof arg.micrometeoriteFindDate === 'undefined' || typeof arg.micrometeoriteFindDate === 'string' ) &&
    // micrometeoriteFindFinder?: Person
    ( typeof arg.micrometeoriteFindFinder === 'undefined' || isPerson(arg.micrometeoriteFindFinder) ) &&
    // micrometeoriteFindId?: number
    ( typeof arg.micrometeoriteFindId === 'undefined' || typeof arg.micrometeoriteFindId === 'number' ) &&
    // micrometeoriteFindPlace?: string
    ( typeof arg.micrometeoriteFindPlace === 'undefined' || typeof arg.micrometeoriteFindPlace === 'string' ) &&
    // micrometeoriteFindPlaceDescription?: string
    ( typeof arg.micrometeoriteFindPlaceDescription === 'undefined' || typeof arg.micrometeoriteFindPlaceDescription === 'string' ) &&
    // micrometeoriteFindRecorder?: Person
    ( typeof arg.micrometeoriteFindRecorder === 'undefined' || isPerson(arg.micrometeoriteFindRecorder) ) &&
    // micrometeoriteForm?: string
    ( typeof arg.micrometeoriteForm === 'undefined' || typeof arg.micrometeoriteForm === 'string' ) &&
    // micrometeoriteWeight?: number
    ( typeof arg.micrometeoriteWeight === 'undefined' || typeof arg.micrometeoriteWeight === 'number' ) &&

  true
  );
  }

export function isPerson(arg: any): arg is models.Person {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // birthday?: string
    ( typeof arg.birthday === 'undefined' || typeof arg.birthday === 'string' ) &&
    // country?: string
    ( typeof arg.country === 'undefined' || typeof arg.country === 'string' ) &&
    // email?: string
    ( typeof arg.email === 'undefined' || typeof arg.email === 'string' ) &&
    // firstname?: string
    ( typeof arg.firstname === 'undefined' || typeof arg.firstname === 'string' ) &&
    // location?: string
    ( typeof arg.location === 'undefined' || typeof arg.location === 'string' ) &&
    // name?: string
    ( typeof arg.name === 'undefined' || typeof arg.name === 'string' ) &&
    // phonenumber?: string
    ( typeof arg.phonenumber === 'undefined' || typeof arg.phonenumber === 'string' ) &&
    // street?: string
    ( typeof arg.street === 'undefined' || typeof arg.street === 'string' ) &&
    // website?: string
    ( typeof arg.website === 'undefined' || typeof arg.website === 'string' ) &&
    // zipcode?: number
    ( typeof arg.zipcode === 'undefined' || typeof arg.zipcode === 'number' ) &&

  true
  );
  }

export function isPredictionResult(arg: any): arg is models.PredictionResult {
  return (
  arg != null &&
  typeof arg === 'object' &&
    // imagesResults?: ImageResult[]
    ( typeof arg.imagesResults === 'undefined' || (Array.isArray(arg.imagesResults) && arg.imagesResults.every((item: unknown) => isImageResult(item))) ) &&
    // micrometeoriteFindId?: number
    ( typeof arg.micrometeoriteFindId === 'undefined' || typeof arg.micrometeoriteFindId === 'number' ) &&

  true
  );
  }


