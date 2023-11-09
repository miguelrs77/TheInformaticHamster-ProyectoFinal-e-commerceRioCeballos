import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';

// Modulos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr'

// Componentes de la App
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoginEncComponent } from './components/login-enc/login-enc.component';
import { SignInEncComponent } from './components/sign-in-enc/sign-in-enc.component';
import { EncuestaCrudComponent } from './components/encuesta-crud/encuesta-crud.component';
import { EncuestaCrudAddEditComponent } from './components/encuesta-crud-add-edit/encuesta-crud-add-edit.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';
import { InfoCardsCrudComponent } from './components/info-cards-crud/info-cards-crud.component';
import { InfoCardsCrudAddEditComponent } from './components/info-cards-crud-add-edit/info-cards-crud-add-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    EncuestaComponent,
    SpinnerComponent,
    LoginEncComponent,
    SignInEncComponent,
    EncuestaCrudComponent,
    EncuestaCrudAddEditComponent,
    ProgressBarComponent,
    BarChartComponent,
    InfoCardsComponent,
    InfoCardsCrudComponent,
    InfoCardsCrudAddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
