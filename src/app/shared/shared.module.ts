import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './Components/banner/banner.component';

@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ BannerComponent ]
})
export class SharedModule { }
