import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindingsComponent } from './findings/Components/findings/findings.component';
import { HomeComponent } from './home/Components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'funde', component: FindingsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
