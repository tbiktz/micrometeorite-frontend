import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindingsListComponent } from './Components/findings-list/findings-list.component';
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
import {MatDialogModule} from '@angular/material/dialog';
import { FindingDetailsComponent } from './Components/finding-details/finding-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    FindingsListComponent,
    FindingsComponent,
    CreateFindingComponent,
    FindingDetailsComponent
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
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'de-DE' }]
})
export class FindingsModule { }
