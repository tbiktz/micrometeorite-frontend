import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'micro-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {
  @Input() title: String = 'No Title';

  constructor() { }

  ngOnInit(): void {
  }

}
