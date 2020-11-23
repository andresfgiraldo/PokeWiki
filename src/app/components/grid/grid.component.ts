import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../../intefaces/pokemon.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: []
})
export class GridComponent {

  @Input() pokemonsGrid: Pokemon[];

  constructor(private router: Router) { }

  ngOnInit(): void { }  

}
