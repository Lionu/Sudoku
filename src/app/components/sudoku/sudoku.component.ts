import { Component } from '@angular/core';
import {TileComponent} from '../tile/tile.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-sudoku',
  standalone: true,
  imports: [
    TileComponent,
    NgForOf
  ],
  templateUrl: './sudoku.component.html',
  styleUrl: './sudoku.component.css'
})
export class SudokuComponent {

}
