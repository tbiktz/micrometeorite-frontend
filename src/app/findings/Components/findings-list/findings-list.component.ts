import { trigger, state, style, transition, animate } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { APIClient } from 'src/app/api';
import { MicrometeoriteFind } from 'src/app/api/models/micrometeorite-find.model';
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
  displayedColumns = ['select', 'micrometeoriteFindId', 'micrometeoriteFindDate', 'micrometeoriteFindPlace', 'micrometeoriteFindPlaceDescription', 'micrometeoriteFindCoordinates', 'micrometeoriteDiameter'];

  constructor(private _apiClient: APIClient,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this._apiClient.getAllMicrometeoriteFinds().subscribe({
      next: (findings) => this.dataSource.data = findings ,
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  }

  openDetails(finding: MicrometeoriteFind) {
    this.dialog.open(FindingDetailsComponent, {
      width: '100%',
      data: { finding },
    });
  }
  selection = new SelectionModel<MicrometeoriteFind>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
 
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: MicrometeoriteFind): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row `;
  }

  deleteSelectedMicrometeoriteFind() {
    const fork = {};
    //@ts-ignore
    this.selection.selected.forEach(el => fork[el.micrometeoriteFindId] = this._apiClient.deleteMicrometeoriteFind(el.micrometeoriteFindId));
    const observable = forkJoin(fork);
    observable.subscribe({
      next: (v) => console.log('NEXT: ', v),
      error: (e) => console.error('ERROR: ', e),
      complete: () => console.info('complete')
    });
  }
}
