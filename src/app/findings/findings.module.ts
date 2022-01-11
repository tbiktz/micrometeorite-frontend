import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindingsListComponent } from './Components/findings-list/findings-list.component';
import { FindingsListElementComponent } from './Components/findings-list-element/findings-list-element.component';
import { SharedModule } from '../shared/shared.module';
import { FindingsComponent } from './Components/findings/findings.component';
import { MatListModule } from '@angular/material/list';
import { APIClientModule } from '../api';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CreateFindingComponent } from './Components/create-finding/create-finding.component';



@NgModule({
  declarations: [
    FindingsListComponent,
    FindingsListElementComponent,
    FindingsComponent,
    CreateFindingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatListModule,
    APIClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class FindingsModule { }
