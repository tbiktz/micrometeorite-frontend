import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'micro-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {
  @Input() title: String = 'No Title';
  @Input() subtitle: String = 'Bitte kontaktieren Sie die Administratioren für weitere Informationen.';

  constructor() { }

  ngOnInit(): void {
  }

}