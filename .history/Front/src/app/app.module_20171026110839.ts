import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@an'

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialcoreModule } from './materialcore/materialcore.module';
import { MaterialsharedModule } from './materialshared/materialshared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MaterialcoreModule,
    MaterialsharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
