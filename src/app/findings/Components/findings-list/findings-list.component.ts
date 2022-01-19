import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { APIClient } from 'src/app/api';
import { MicrometeoriteFind } from 'src/app/api/models';
import { FindingDetailsComponent } from '../finding-details/finding-details.component';

@Component({
  selector: 'micro-findings-list',
  templateUrl: './findings-list.component.html',
  styleUrls: ['./findings-list.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class FindingsListComponent implements OnInit {
  //@ts-ignore  
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<MicrometeoriteFind> = new MatTableDataSource();
  displayedColumns = ['micrometeoriteFindId', 'micrometeoriteFindDate', 'micrometeoriteFindPlace', 'micrometeoriteFindPlaceDescription', 'micrometeoriteFindCoordinates', 'micrometeoriteDiameter'];

  constructor(private _apiClient: APIClient,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this._apiClient.getAllMicrometeoriteFinds().subscribe(findings => {
      this.dataSource.data = findings;
    });
  }

  openDetails(finding: MicrometeoriteFind){
    this.dialog.open(FindingDetailsComponent, {
      width: '100%',
      data: {finding},
    });
  }
}
