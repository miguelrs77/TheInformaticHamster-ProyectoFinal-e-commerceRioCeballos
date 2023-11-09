import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { LoginEncComponent } from './components/login-enc/login-enc.component';
import { SignInEncComponent } from './components/sign-in-enc/sign-in-enc.component';
import { EncuestaCrudComponent } from './components/encuesta-crud/encuesta-crud.component';
import { EncuestaCrudAddEditComponent } from './components/encuesta-crud-add-edit/encuesta-crud-add-edit.component';
import { InfoCardsCrudComponent } from './components/info-cards-crud/info-cards-crud.component';
import { InfoCardsCrudAddEditComponent } from './components/info-cards-crud-add-edit/info-cards-crud-add-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'loginAdm', component: LoginComponent },
  { path: 'loginEnc', component: LoginEncComponent },
  { path: 'signInAdm', component: SignInComponent },
  { path: 'signInEnc', component: SignInEncComponent },
  { path: 'formulario', component: EncuestaComponent },
  { path: 'encrud', component: EncuestaCrudComponent },
  { path: 'encuestaadd', component: EncuestaCrudAddEditComponent },
  { path: 'encuestaedit/:id', component: EncuestaCrudAddEditComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'infocard', component: InfoCardsCrudComponent },
  { path: 'infocardadd', component: InfoCardsCrudAddEditComponent },
  { path: 'infocardedit/:id', component: InfoCardsCrudAddEditComponent },
  // Esto siempre último
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
