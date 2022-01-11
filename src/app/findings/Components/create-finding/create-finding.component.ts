import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { getBase64 } from 'src/app/home/shared/Helpers/helper';
import { CreateFindingStepperService } from 'src/app/home/shared/Services/create-finding-stepper.service';

@Component({
  selector: 'micro-create-finding',
  templateUrl: './create-finding.component.html',
  styleUrls: ['./create-finding.component.less']
})
export class CreateFindingComponent implements OnInit {
  //@ts-ignore
  imageForm: FormGroup;
  //@ts-ignore
  images: any[];
  //@ts-ignore
  findingFormGroup: FormGroup;
  selectedFiles: File[] = [];
  //@ts-ignore
  data: MicrometeoriteFind;
  imageCount: number | undefined;

  constructor(private _fb: FormBuilder,
    private createFindingService: CreateFindingStepperService) { }
/**
 * micrometeoriteFindFinder: this._fb.group({
        birthday: [''],
        country: [''],
        email: [''],
        firstname: [''],
        location: [''],
        name: [''],
        phonenumber: [''],
        street: [''],
        website: [''],
        zipcode: ['']
      }),
 */
  ngOnInit(): void {
    this.images = [];
    this.imageForm = this._fb.group({
      images: this._fb.array([this.getImageFormGroup()]),
    });
    this.createFindingService.micrometeoriteFindAnnounced$.subscribe(finding => {
      this.data = finding;
      this.imageCount = finding?.images?.length;
    });
    this.findingFormGroup = this._fb.group({
      micrometeoriteChemicalComposition: [''],
      micrometeoriteDiameter: [''],
      micrometeoriteFindComment: [''],
      micrometeoriteFindCoordinates: [''],
      micrometeoriteFindDate: [''],
      micrometeoriteFindFinder: [''],
      micrometeoriteFindId: [''],
      micrometeoriteFindPlace: [''],
      micrometeoriteFindPlaceDescription: [''],
      micrometeoriteFindRecorder: [''],
      micrometeoriteForm: [''],
      micrometeoriteWeight: ['']
    });
  }

  save() { }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  getImageFormGroup() {
    this.images.push(undefined);
    return this._fb.group({
      image: [null, Validators.required],
      photographer: [null],
      recordingTool: [null],
      magnification: [null],
      recordingDate: [null],
      camera: [null],
      lens: [null]
    });
  }

  get imagesFormArray() {
    return this.imageForm?.get('images') as FormArray;
  }

  addImageForm() {
    this.imagesFormArray.push(this.getImageFormGroup());
  }

  removeImageForm(imageIndex: number): void {
    this.imagesFormArray.removeAt(imageIndex);
    this.images.splice(imageIndex, 1);
    if (this.imagesFormArray.length <= 0) {
      this.imagesFormArray.setErrors({ 'incorrect': true });
    }
  }

  onFileChange(event: any, index: number): void {
    const file = event.target.files[0];
    getBase64(file).then(data => {
      this.images.splice(index, 1, data);
      if (!file) {
        this.imagesFormArray.controls[index].get('image')?.patchValue(null);
      }
    }).catch(e => {
      console.log('Fehler bei der Umwandlung File -> Base64');
    });
  }
}
