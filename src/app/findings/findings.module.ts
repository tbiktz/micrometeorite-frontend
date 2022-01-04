import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindingsListComponent } from './Components/findings-list/findings-list.component';
import { FindingsListElementComponent } from './Components/findings-list-element/findings-list-element.component';
import { SharedModule } from '../shared/shared.module';
import { FindingsComponent } from './Components/findings/findings.component';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    FindingsListComponent,
    FindingsListElementComponent,
    FindingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule
  ]
})
export class FindingsModule { }
