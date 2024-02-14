import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-page',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {
  public publishers = [
    {id: 'DC Comics', title: 'DC - Comics'},
    {id: 'MARVEL Comics', title: 'MARVEL - Comics'}
  ]
}
