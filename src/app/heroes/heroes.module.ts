import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroImagePipe } from './pipes/hero-image.pipe';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroesRoutingModule,

    //Pipes
    HeroImagePipe,
  ]
})
export class HeroesModule { }
