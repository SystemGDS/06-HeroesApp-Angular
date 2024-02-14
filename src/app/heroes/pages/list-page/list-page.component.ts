import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

import { HeroesService } from '../../services/heroes.service';
import { CommonModule, NgFor } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CommonModule,MaterialModule, CardComponent, NgFor],
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {
  public heroes: Hero[]=[]

  constructor( private heroesService: HeroesService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
