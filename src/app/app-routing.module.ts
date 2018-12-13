import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SouscriptionComponent }  from './pages/souscription/souscription.component';
const routes: Routes = [
 
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Destinations' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'pages/souscriptions',
    component: SouscriptionComponent,
    data: { title: 'souscriptions' }
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
