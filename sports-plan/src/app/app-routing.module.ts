import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: '', redirectTo:'/home', pathMatch: 'full'},
  // { 
  {path : '', component: HomeComponent},
  {path : 'user-details', component: UserDetailsComponent}
  //   children: [
  //     { path: '', redirectTo: 'home', pathMatch: 'full'},
  //     { path: 'home', component: HomeComponent}
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
