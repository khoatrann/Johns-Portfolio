import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './About-Me/about-me.component';
import { MyHomiesComponent } from './my-homies/my-homies.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent, pathMatch: 'full' },
  { path: 'AboutMe', component: AboutMeComponent, pathMatch: 'full' },
  { path: 'MyHomies', component: MyHomiesComponent, pathMatch: 'full' },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
