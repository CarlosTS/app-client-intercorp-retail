import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/client/client.component';
import { ClientAnalysitsComponent } from './components/client-analysits/client-analysits.component';

const routes: Routes = [
  {path: '', component:ClientComponent},
  {path: 'analysits', component:ClientAnalysitsComponent}, 
  //{path: 'error', component: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
