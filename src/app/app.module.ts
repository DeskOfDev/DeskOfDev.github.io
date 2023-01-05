import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import { ConnectionService } from './connection.service';
import { FootbarComponent } from './footbar/footbar.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WorksComponent } from './works/works.component';
import { ShowcaseGraphicdesignComponent } from './showcase-graphicdesign/showcase-graphicdesign.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FootbarComponent,
    ContactComponent,
    SkillsetComponent,
    AboutComponent,
    TermsComponent,
    PrivacyComponent,
    WorksComponent,
    ShowcaseGraphicdesignComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faFacebookF);
  }
}
