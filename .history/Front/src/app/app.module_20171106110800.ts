import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialcoreModule } from './materialcore/materialcore.module';
import { MaterialsharedModule } from './materialshared/materialshared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/input-forms/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterFormComponent } from './components/input-forms/register-form/register-form.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { UserprofileDataComponent } from './components/output-data/userprofile-data/userprofile-data.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
{path: '', component: HomeComponent},
{path: 'register', component: RegisterComponent, canActi},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
{path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LoginFormComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterFormComponent,
    UserprofileDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialcoreModule,
    MaterialsharedModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
