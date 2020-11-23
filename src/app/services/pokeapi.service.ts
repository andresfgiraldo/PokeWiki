import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Listado, Pokemon, Specie } from '../intefaces/pokemon.interface';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private URL_API: string = 'https://pokeapi.co/api/v2';
  public offset: number = 0;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }

  getList(): Observable<Listado> {

    if (this.cargando)
      return of<Listado>();

    this.cargando = true;
    return this.http.get<Listado>(`${this.URL_API}/pokemon/`, { params: this.params })
      .pipe(
        tap(() => {
          setTimeout(() => {
            this.offset += 20;
            this.cargando = false;
          }, 1000)
        })
      )
  }

  getPokemon(id_or_name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.URL_API}/pokemon/${id_or_name}/`)
  }

  getPokemonDetail(id: number): Observable<Specie> {
    return this.http.get<Specie>(`${this.URL_API}/pokemon-species/${id}/`)
  }

  search(): Observable<Listado> {

    if (this.cargando)
      return of<Listado>();

    this.cargando = true;
    return this.http.get<Listado>(`${this.URL_API}/pokemon/`, { params: { offset: '0', limit: '-1' } })
      .pipe(
        tap(() => {
          setTimeout(() => {
            this.cargando = false;
          }, 1000)
        })
      )
  }

  get params() {
    return { offset: this.offset.toString(), limit: '20' }
  }
}
