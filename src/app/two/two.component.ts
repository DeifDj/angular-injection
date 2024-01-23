import { Component } from '@angular/core';
import { ShowService } from '../show.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  constructor(private showService: ShowService) { }

  get items() {
     return this.showService.items;
  }
 
}
