import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './modules/features/components/features/features.component';
import { HomeComponent } from './modules/home/components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
