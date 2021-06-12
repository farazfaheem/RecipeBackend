import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import  {HomeComponent} from './home/home.component'
import { MasterMealListComponent } from './meal/master-meal-list/master-meal-list.component';
import { MealListComponent} from './meal/meal-list/meal-list.component'

const routes: Routes = [
  { path:'', component: MealListComponent},
  { path:'home', component: HomeComponent},
  { path:'meals', component: MealListComponent,  canActivate: [AuthGuard]},
  { path:'mastermeals', component: MasterMealListComponent,  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
