import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { LoginComponent } from './UserAccount/login/login.component';
import { RegisterComponent } from './UserAccount/register/register.component';
import { authInterceptorProviders } from './_interceptor/auth.interceptor';
import { ChangePasswordComponent } from './UserAccount/change-password/change-password.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { JobSeekerComponent } from './JobSeeker/job-seeker/job-seeker.component';
import { EmployerComponent } from './Employer/employer/employer.component';
import { EmployerProfileComponent } from './Employer/employer-profile/employer-profile.component';
import { CreateNewVacancyComponent } from './Employer/Vacancy/create-new-vacancy/create-new-vacancy.component';
import { PostedVacanciesComponent } from './Employer/Vacancy/posted-vacancies/posted-vacancies.component';
import { VacancyDetailComponent } from './Employer/Vacancy/vacancy-detail/vacancy-detail.component';
import { UpdateVacancyComponent } from './Employer/Vacancy/update-vacancy/update-vacancy.component';
import { PostedVacancyItemComponent } from './Employer/Vacancy/posted-vacancy-item/posted-vacancy-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    NotFoundPageComponent,
    JobSeekerComponent,
    EmployerComponent,
    EmployerProfileComponent,
    CreateNewVacancyComponent,
    PostedVacanciesComponent,
    VacancyDetailComponent,
    UpdateVacancyComponent,
    PostedVacancyItemComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
