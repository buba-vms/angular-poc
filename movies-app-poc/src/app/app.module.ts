import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { StoreModule } from '@ngrx/store';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { movieReducer } from './ngrx/movie.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    MainContentComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ movie: movieReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
