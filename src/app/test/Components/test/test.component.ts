import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIClient } from 'src/app/api';
import { MicrometeoriteFind } from 'src/app/api/models';

@Component({
  selector: 'micro-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
  //@ts-ignore
  micro: MicrometeoriteFind;
  id: number | undefined;

  constructor(private _aR: ActivatedRoute,
    private _apiClient: APIClient) { }

  ngOnInit(): void {
    this._aR.paramMap.subscribe(param => {
      this.id = Number(param.get('id'));
      this._apiClient.getMicrometeoriteFindById({micrometeoriteFindId: this.id }).subscribe(finding => this.micro = finding);
    });
  }

}
