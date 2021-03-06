import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/Forms';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { LoginComponent } from './UserAccount/login/login.component';
import { RegisterComponent } from './UserAccount/register/register.component';
import { authInterceptorProviders } from './_interceptor/auth.interceptor';
import { ChangePasswordComponent } from './UserAccount/change-password/change-password.component';
import { JobSeekerComponent } from './JobSeeker/job-seeker/job-seeker.component';
import { EmployerComponent } from './Employer/employer/employer.component';
import { EmployerProfileComponent } from './Employer/employer-profile/employer-profile.component';
import { CreateNewVacancyComponent } from './Employer/Vacancy/create-new-vacancy/create-new-vacancy.component';
import { PostedVacanciesComponent } from './Employer/Vacancy/posted-vacancies/posted-vacancies.component';
import { UpdateVacancyComponent } from './Employer/Vacancy/update-vacancy/update-vacancy.component';
import { PostedVacancyItemComponent } from './Employer/Vacancy/posted-vacancy-item/posted-vacancy-item.component';
import { JobSeekerProfileComponent } from './JobSeeker/Profile/job-seeker-profile/job-seeker-profile.component';
import { SearchJobsComponent } from './JobSeeker/SearchJobs/search-jobs/search-jobs.component';
import { QualificationFormComponent } from './JobSeeker/Qualifications/qualification-form/qualification-form.component';
import { QualificationItemComponent } from './JobSeeker/Qualifications/qualification-item/qualification-item.component';
import { QualificationListComponent } from './JobSeeker/Qualifications/qualification-list/qualification-list.component';
import { ProfileDetailFormComponent } from './JobSeeker/Profile/profile-detail-form/profile-detail-form.component';
import { SearchJobItemComponent } from './JobSeeker/SearchJobs/search-job-item/search-job-item.component';
import { VacancyRequestItemComponent } from './Employer/VacanyRequest/vacancy-request-item/vacancy-request-item.component';
import { VacancyRequestsComponent } from './Employer/VacanyRequest/vacancy-requests/vacancy-requests.component';
import { MyJobsItemComponent } from './JobSeeker/MyJobs/my-jobs-item/my-jobs-item.component';
import { MyJobsComponent } from './JobSeeker/MyJobs/my-jobs/my-jobs.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { EmployerProfileModalComponent } from './ProfileModals/employer-profile-modal/employer-profile-modal.component';
import { JobSeekerProfileModalComponent } from './ProfileModals/job-seeker-profile-modal/job-seeker-profile-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationModalComponent } from './ProfileModals/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    JobSeekerComponent,
    EmployerComponent,
    EmployerProfileComponent,
    CreateNewVacancyComponent,
    PostedVacanciesComponent,
    UpdateVacancyComponent,
    PostedVacancyItemComponent,
    JobSeekerProfileComponent,
    SearchJobsComponent,
    QualificationFormComponent,
    QualificationItemComponent,
    QualificationListComponent,
    ProfileDetailFormComponent,
    SearchJobItemComponent,
    VacancyRequestItemComponent,
    VacancyRequestsComponent,
    MyJobsItemComponent,
    MyJobsComponent,
    EmployerProfileModalComponent,
    JobSeekerProfileModalComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
