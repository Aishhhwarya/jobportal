import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmpDashboardComponent } from './Employer/emp-dashboard/emp-dashboard.component';
import { EmployerProfileComponent } from './Employer/employer-profile/employer-profile.component';
import { EmployerComponent } from './Employer/employer/employer.component';
import { CreateNewVacancyComponent } from './Employer/Vacancy/create-new-vacancy/create-new-vacancy.component';
import { PostedVacanciesComponent } from './Employer/Vacancy/posted-vacancies/posted-vacancies.component';
import { UpdateVacancyComponent } from './Employer/Vacancy/update-vacancy/update-vacancy.component';
import { VacancyDetailComponent } from './Employer/Vacancy/vacancy-detail/vacancy-detail.component';
import { HomepageComponent } from './Home/homepage/homepage.component';
import { JobSeekerComponent } from './JobSeeker/job-seeker/job-seeker.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ChangePasswordComponent } from './UserAccount/change-password/change-password.component';
import { LoginComponent } from './UserAccount/login/login.component';
import { RegisterComponent } from './UserAccount/register/register.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'employer', component: EmployerComponent,canActivate:[AuthGuard]},
  {
    path:'employer', 
    component: EmployerComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path:'profile', component: EmployerProfileComponent
      },
      {
        path:'newVacancy', component: CreateNewVacancyComponent
      },
      {
        path:'postedVacancies', component: PostedVacanciesComponent,
        // children: [
        //   {
        //     path:'vacancyDetail', component: VacancyDetailComponent
        //   }
        // ]
      },
      {
        path:'vacancyDetail', component: VacancyDetailComponent
      },
      {
        path:'vacancyUpdate', component: UpdateVacancyComponent
      },
    ],
  },
  { path: 'jobseeker', component: JobSeekerComponent,canActivate:[AuthGuard]},
  { path: 'changePassword', component: ChangePasswordComponent},
  { path: '**', pathMatch: 'full', 
        component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
