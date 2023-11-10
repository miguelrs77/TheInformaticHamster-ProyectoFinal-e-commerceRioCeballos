import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SurveyComponent } from './components/encuesta/encuesta.component';
import { SurveyCrudComponent } from './components/encuesta-crud/encuesta-crud.component';
import { SurveyCrudAddEditComponent } from './components/encuesta-crud-add-edit/encuesta-crud-add-edit.component';
import { InfoCardsCrudComponent } from './components/info-cards-crud/info-cards-crud.component';
import { InfoCardsCrudAddEditComponent } from './components/info-cards-crud-add-edit/info-cards-crud-add-edit.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { SignupUserComponent } from './components/signup-user/signup-user.component';
import { SaberMasComponent } from './components/saber-mas/saber-mas.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'signup', component: SignupUserComponent },
  { path: 'places', component: SaberMasComponent },
  { path: 'form', component: SurveyComponent },
  { path: 'survey', component: SurveyCrudComponent },
  { path: 'survey-add', component: SurveyCrudAddEditComponent },
  { path: 'survey-edit/:id', component: SurveyCrudAddEditComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'infocard', component: InfoCardsCrudComponent },
  { path: 'infocard-add', component: InfoCardsCrudAddEditComponent },
  { path: 'infocard-edit/:id', component: InfoCardsCrudAddEditComponent },
  // Esto siempre último
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
