import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PartnersBlockComponent } from './components/partners-block/partners-block.component';
import { FaqBlockComponent } from './components/faq-block/faq-block.component';
import { SupportSitesBlockComponent } from './components/support-sites-block/support-sites-block.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainBlockComponent } from './components/main-block/main-block.component';
import { HomeComponent } from './screens/home/home.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserAgreementComponent } from './screens/user-agreement/user-agreement.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PartnersBlockComponent,
    FaqBlockComponent,
    SupportSitesBlockComponent,
    FooterComponent,
    MainBlockComponent,
    HomeComponent,
    UserAgreementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(/*options*/),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
