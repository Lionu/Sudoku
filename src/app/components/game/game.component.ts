import {Component, importProvidersFrom} from '@angular/core';
import {InteractoModule, interactoTreeUndoProviders} from 'interacto-angular';
import {SudokuComponent} from '../sudoku/sudoku.component';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatFabButton} from '@angular/material/button';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [InteractoModule, SudokuComponent, MatIcon, HttpClientModule, MatFabButton],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
  providers : [interactoTreeUndoProviders(true),MatIconRegistry]
})
export class GameComponent {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'ranking',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/img/ranking.svg'),
    )
  }
}
