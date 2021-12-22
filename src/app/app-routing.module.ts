import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    // { path: '', component: HomeComponent },
    // { path: 'home', redirectTo: '', pathMatch: 'full' },
  ]},
  { path: 'canvas', component: CanvasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
