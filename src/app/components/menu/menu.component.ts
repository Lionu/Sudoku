import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatCheckbox} from '@angular/material/checkbox';
import {levels, LevelValue} from '../../classes/level';
import {MatOption, MatSelect} from '@angular/material/select';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {Router, RouterLinkActive} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatCheckbox,
    MatSelect,
    MatOption,
    NgForOf,
    MatButton,
    RouterLinkActive,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  level : string = "easy"
  suggestionsChecked : boolean = false;
  inputFormControl = new FormControl('');

  constructor(private router : Router) {
  }

  public levelsChoice() : ReadonlyArray<LevelValue>{
    return levels;
  }

  clickOnBoard() {
    this.router.navigate(['/game']);
  }

}
