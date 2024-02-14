import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../material/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink, MaterialModule],
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sideBarItems = [
    {label:'Listado', icon:'label', url:'./list'},
    {label:'Añadido', icon:'add', url:'./new-hero'},
    {label:'Buscar', icon:'search', url:'./search'},
  ]
}
