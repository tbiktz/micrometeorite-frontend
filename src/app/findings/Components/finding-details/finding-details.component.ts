import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MicrometeoriteFind } from 'src/app/api/models/micrometeorite-find.model';

@Component({
  selector: 'micro-finding-details',
  templateUrl: './finding-details.component.html',
  styleUrls: ['./finding-details.component.less']
})
export class FindingDetailsComponent implements OnInit {
  imagesPanelOpenState: boolean | undefined;
  basicPanelOpenState: boolean | undefined;
  finderPanelOpenState: boolean | undefined;
  recorderPanelOpenState: boolean | undefined;

  constructor(public dialogRef: MatDialogRef<FindingDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {finding: MicrometeoriteFind}) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
