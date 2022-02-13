import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFindingComponent } from './findings/Components/create-finding/create-finding.component';
import { FindingsComponent } from './findings/Components/findings/findings.component';
import { HomeComponent } from './home/Components/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/Components/test/test.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'funde', component: FindingsComponent },
  { path: 'funde/:id', component: TestComponent },
  { path: 'erstellen', component: CreateFindingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
