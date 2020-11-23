import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { Listado, Pokemon } from '../../intefaces/pokemon.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: []
})
export class SearchComponent implements OnInit {

  public pokemonsSearch: Pokemon[] = [];

  constructor(private activateR: ActivatedRoute,
    private _api: PokeapiService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.activateR.params.subscribe(params => {

      let pokemons: Pokemon[] = [];
      this.spinner.show();
      this._api.search().subscribe(
        (r: Listado) => {
          for (let result of r.results) {

            if (result.name.toLowerCase().indexOf(params.nombre.toLowerCase()) >= 0)
              this._api.getPokemon(result.name).subscribe(pok => {
                if (pok.id <= 2000)
                  pokemons.push(pok)
              })
          }
        }, (err) => { console.log(err) },
        () => {
          setTimeout(() => {
            this.spinner.hide();
            this.pokemonsSearch = pokemons.sort((a, b) => a.id - b.id);
          }, 2000)
        }
      )

    })
  }

}
