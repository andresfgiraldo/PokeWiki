import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/intefaces/pokemon.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() pokemon:Pokemon;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  detalle(): void {
    this.router.navigate(['/pokemon', this.pokemon.id])
  }
}
