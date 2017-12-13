import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialcoreModule } from './materialcore/materialcore.module';
import { MaterialsharedModule } from './materialshared/materialshared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/input-forms/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialcoreModule,
    MaterialsharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
