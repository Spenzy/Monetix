import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormModalComponent } from './home/form-modal/form-modal.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormModalComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
