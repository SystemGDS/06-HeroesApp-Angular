import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute,Router, RouterModule } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';
import { HeroImagePipe } from '../../pipes/hero-image.pipe';

@Component({
  selector: 'app-hero-page',
  standalone: true,
  imports: [MaterialModule,CommonModule,RouterModule, HeroImagePipe],
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero;
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    ){ }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.activatedRoute.params
    .pipe(
      delay(1000),
      switchMap(({id})=> this.heroesService.getHeroById(id)),
    ).subscribe( hero =>{
      if (!hero) return this.router.navigate(['/heroes.list']);

      // console.log(hero)
      this.hero =  hero;
      return
    })
  }

  goBack():void {
    this.router.navigate(['heroes/list']);
  }
}
