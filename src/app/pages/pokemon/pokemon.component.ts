import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon, Specie } from 'src/app/intefaces/pokemon.interface';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: []
})
export class PokemonComponent implements OnInit {

  public pokemon: Pokemon;
  public specie: Specie;

  constructor(private activateR: ActivatedRoute,
    private _api: PokeapiService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {
    this._api.getPokemon(this.activateR.snapshot.params.id).subscribe((p) => {
      this.spinner.show()
      this.pokemon = p;
      
      this._api.getPokemonDetail(this.activateR.snapshot.params.id).subscribe((sp) => {
        this.specie = sp;
      },(err)=>{},()=>{this.spinner.hide()})

    })
  }

}
