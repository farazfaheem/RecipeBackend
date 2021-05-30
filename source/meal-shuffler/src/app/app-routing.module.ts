import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {HomeComponent} from './home/home.component'
import { MealListComponent} from './meal/meal-list/meal-list.component'

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'meals', component: MealListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
