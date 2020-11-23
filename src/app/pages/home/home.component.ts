import { Component, HostListener, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { Listado, Pokemon } from '../../intefaces/pokemon.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: []
})
export class HomeComponent implements OnInit {

  public pokemonsHome: Pokemon[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1500;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {

      if (this._api.cargando)
        return;

      this.cargarGrid();
    }
  }

  constructor(private _api: PokeapiService, 
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this._api.offset = 0;
    this.cargarGrid();
  }

  cargarGrid() {
    this.spinner.show();
    let pokemons: Pokemon[] = [];
    this._api.getList().subscribe(
      (r: Listado) => {
        for (let result of r.results) {
          this._api.getPokemon(result.name).subscribe(pok => {
            pokemons.push(pok)
          })
        }
      },
      (err) => { console.log(err); },
      () => {
        setTimeout(() => {
          this.spinner.hide();
          this.pokemonsHome = this.pokemonsHome.concat(pokemons.sort((a, b) => a.id - b.id));
        }, 1000)
      }
    )
  }
}
