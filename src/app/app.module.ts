import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomersNewComponent } from './components/customers-new/customers-new.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageHeaderComponent } from './utils/page-header/page-header.component';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    ContactsComponent,
    CustomersComponent,
    CustomersNewComponent,
    PageNotFoundComponent,
    PageHeaderComponent,
    ParagraphCapitalPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
