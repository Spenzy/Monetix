import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AssistanceComponent} from './assistance/assistance.component';
import {ConsultingComponent} from './consulting/consulting.component';
import {TrainingComponent} from './training/training.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'assistance', component: AssistanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
