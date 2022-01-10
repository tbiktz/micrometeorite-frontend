import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { APIClient } from 'src/app/api';
import { MicrometeoriteFind } from 'src/app/api/models';

@Component({
  selector: 'micro-findings-list',
  templateUrl: './findings-list.component.html',
  styleUrls: ['./findings-list.component.less'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class FindingsListComponent implements OnInit {
  data: MicrometeoriteFind[] = [];
  columns = [
    {title: 'ID', technicalName: 'micrometeoriteFindId'},
    {title: 'Beschreibung', technicalName: 'micrometeoriteFindPlaceDescription'},
    {title: 'Ort', technicalName: 'micrometeoriteFindPlace'},
    {title: 'Koordinaten', technicalName: 'micrometeoriteFindCoordinates'},
    {title: 'Diameter', technicalName: 'micrometeoriteDiameter'}
  ];
  columnsToDisplay = ['ID', 'Beschreibung', 'Ort', 'Koordinaten', 'Diameter'];
  expandedElement: MicrometeoriteFind | null | undefined;

  constructor(private apiClient: APIClient) { }

  ngOnInit(): void {
    this.apiClient.getAllMicrometeoriteFinds().subscribe(findings => {
      this.data = findings;
      this.expandedElement = this.data[0];
    });
  }

}
