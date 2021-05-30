import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MealCardComponent } from './meal/meal-card/meal-card.component';
import { MealListComponent } from './meal/meal-list/meal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MealCardComponent,
    MealListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
