import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './Components/banner/banner.component';
import { APIClientModule } from '../api';

@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    APIClientModule
  ],
  exports: [ BannerComponent ]
})
export class SharedModule { }
