import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule, NgFor } from '@angular/common';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'heroes-hero-card',
  standalone: true,
  imports: [CommonModule,MaterialModule,NgFor, HeroImagePipe,RouterLink],
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent implements OnInit{
  @Input()
  public hero!: Hero
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    if(!this.hero) throw Error('Hero property is required')
  }
}
