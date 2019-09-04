import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientComponent } from './components/client/client.component';
import { ClientAnalysitsComponent } from './components/client-analysits/client-analysits.component';

import { ClientService } from './services/client.service';
import { ClientPromComponent } from './components/client-prom/client-prom.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientComponent,
    ClientAnalysitsComponent,
    ClientPromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,'app-client-intercorp'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
