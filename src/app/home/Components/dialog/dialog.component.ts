import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { MicrometeoriteFind } from 'src/app/api/models';
import { getBase64 } from '../../shared/Helpers/helper';
import { CreateFindingStepperService } from '../../shared/Services/create-finding-stepper.service';

@Component({
  selector: 'micro-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less']
})
export class DialogComponent implements OnInit {
  //@ts-ignore
  imageForm: FormGroup;
  //@ts-ignore
  images: any[];
  //@ts-ignore
  findingFormGroup: FormGroup;
  //@ts-ignore
  secondFormGroup: FormGroup;
  selectedFiles: File[] = [];
  //@ts-ignore
  data: MicrometeoriteFind;
  imageCount: number | undefined;

  constructor(private _fb: FormBuilder,
    private createFindingService: CreateFindingStepperService) { }

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
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._fb.group({
      secondCtrl: ['', Validators.required],
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
