import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { APIClient } from 'src/app/api';
import { MicrometeoriteFind, Person } from 'src/app/api/models';
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
  images: string[];
  //@ts-ignore
  findingFormGroup: FormGroup;
  selectedFiles: File[] = [];
  //@ts-ignore
  data: MicrometeoriteFind;
  imageCount: number | undefined;
  numericRegex: RegExp = /^([0-9]*[\,|\.][0-9]*)$/;
  alphanumericRegex: RegExp = /^[a-zA-Z0-9,\.äöüß\/]*$/;

  constructor(private _fb: FormBuilder,
    private createFindingService: CreateFindingStepperService,
    private apiClient: APIClient) { }
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
      images: this._fb.array([this.addImageFormGroup()]),
    });
    this.createFindingService.micrometeoriteFindAnnounced$.subscribe(finding => {
      this.data = finding;
      this.imageCount = finding?.images?.length;
    });
    this.findingFormGroup = this._fb.group({
      micrometeoriteChemicalComposition: [''],
      micrometeoriteDiameter: ['', [Validators.pattern(this.numericRegex)]],
      micrometeoriteFindComment: ['', [Validators.pattern(this.alphanumericRegex)]],
      micrometeoriteFindCoordinates: [''],
      micrometeoriteFindDate: [''],
      micrometeoriteFindFinder: this.addPersonFormGroup(),
      micrometeoriteFindId: [''],
      micrometeoriteFindPlace: ['', [Validators.pattern(this.alphanumericRegex)]],
      micrometeoriteFindPlaceDescription: ['', [Validators.pattern(this.alphanumericRegex)]],
      micrometeoriteFindRecorder: this.addPersonFormGroup(),
      micrometeoriteForm: ['', [Validators.pattern(this.alphanumericRegex)]],
      micrometeoriteWeight: ['', [Validators.pattern(this.numericRegex)]]
    });
  }

  save() {
    const result = { ...this.imageForm.value, ...this.findingFormGroup.value };
    this.apiClient.addMicrometeoriteFind({ body: this.mergeImagesAndForm(result) }).subscribe(
      success => {
        console.log('Erfolgreich angelegt: ', success);
      }, error => {
        console.log('Fund konnte nicht angelegt werden: ', error);
      }
    )
  }

  mergeImagesAndForm(obj: MicrometeoriteFind): MicrometeoriteFind {
    obj.images?.map((element, index) => {
      element.picture = this.images[index]
    });
    return obj;
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  addImageFormGroup() {
    this.images.push('');
    return this._fb.group({
      image: [null, [Validators.required]],
      photographer: this.addPersonFormGroup(),
      recordingInstrument: [null, [Validators.pattern(this.alphanumericRegex)]],
      magnification: [null],
      photographyDate: [null],
      camera: [null, [Validators.pattern(this.alphanumericRegex)]],
      lens: [null, [Validators.pattern(this.alphanumericRegex)]]
    });
  }

  addPersonFormGroup() {
    return this._fb.group({
      birthday: [''],
      country: ['', [Validators.pattern(this.alphanumericRegex)]],
      email: ['', [Validators.email]],
      firstname: ['', [Validators.pattern(this.alphanumericRegex)]],
      location: ['', [Validators.pattern(this.alphanumericRegex)]],
      name: ['', [Validators.pattern(this.alphanumericRegex)]],
      phonenumber: ['', [Validators.pattern(this.alphanumericRegex)]],
      street: ['', [Validators.pattern(this.alphanumericRegex)]],
      website: ['', [Validators.pattern(this.alphanumericRegex)]],
      zipcode: ['', [Validators.pattern(this.numericRegex)]]
    });
  }

  getPhotographerFormGroup(i: number): FormGroup {
    return this.imagesFormArray.at(i).get('photographer') as FormGroup
  }

  getImageFormGroup(i: number) {
    return this.imagesFormArray.at(i) as FormGroup
  }

  get imagesFormArray() {
    return this.imageForm?.get('images') as FormArray;
  }

  get micrometeoriteFindFinder(): FormGroup {
    return this.findingFormGroup?.get('micrometeoriteFindFinder') as FormGroup;
  }

  get micrometeoriteFindRecorder(): FormGroup {
    return this.findingFormGroup?.get('micrometeoriteFindRecorder') as FormGroup;
  }

  addImageForm() {
    this.imagesFormArray.push(this.addImageFormGroup());
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
      // @ts-ignore
      this.images.splice(index, 1, data);
      if (!file) {
        this.imagesFormArray.controls[index].get('image')?.patchValue(null);
      }
    }).catch(e => {
      console.log('Fehler bei der Umwandlung File -> Base64: ', e);
    });
  }
}
