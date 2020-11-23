import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from '../components/components.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 




@NgModule({
  declarations: [HomeComponent, PokemonComponent, SearchComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxSpinnerModule
  ]
})
export class PagesModule { }
