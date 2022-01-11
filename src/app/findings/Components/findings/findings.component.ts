import { Component, OnInit } from '@angular/core';
import { APIClient } from 'src/app/api';
import { MicrometeoriteFind } from 'src/app/api/models';

@Component({
  selector: 'micro-findings',
  templateUrl: './findings.component.html',
  styleUrls: ['./findings.component.less']
})
export class FindingsComponent implements OnInit {
  findings: MicrometeoriteFind[] = [];

  constructor(private apiClient: APIClient) { }

  ngOnInit(): void {
    this.apiClient.getAllMicrometeoriteFinds().subscribe(findings => {
      this.findings = findings;
    });
  }

}
