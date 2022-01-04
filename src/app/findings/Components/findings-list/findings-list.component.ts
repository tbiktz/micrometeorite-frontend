import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'micro-findings-list',
  templateUrl: './findings-list.component.html',
  styleUrls: ['./findings-list.component.less']
})
export class FindingsListComponent implements OnInit {
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit(): void {
  }

}
