import {Component, Input} from '@angular/core';
import {MatOption, MatSelect} from '@angular/material/select';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-tile',
  standalone: true,
  imports: [
    MatSelect,
    MatOption,
    NgForOf
  ],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {
  @Input() x!: number;
  @Input() y!: number;
  listNumberOption : number[] = [1,2,3,4,5,6,7,8,9];
}
