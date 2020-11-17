import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AssistanceComponent} from './assistance/assistance.component';
import {ConsultingComponent} from './consulting/consulting.component';
import {TrainingComponent} from './training/training.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'consulting', component: ConsultingComponent },
  { path: 'assistance', component: AssistanceComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
