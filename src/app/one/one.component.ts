import { Component } from '@angular/core';
import { ShowService } from '../show.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {
  constructor(private showService: ShowService) { }

  get items() {
     return this.showService.items;
  }
 

}
