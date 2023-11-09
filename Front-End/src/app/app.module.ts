import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

// Modulos
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

// Componentes de la App
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SurveyComponent } from './components/encuesta/encuesta.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SurveyCrudComponent } from './components/encuesta-crud/encuesta-crud.component';
import { SurveyCrudAddEditComponent } from './components/encuesta-crud-add-edit/encuesta-crud-add-edit.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { InfoCardsComponent } from './components/info-cards/info-cards.component';
import { InfoCardsCrudComponent } from './components/info-cards-crud/info-cards-crud.component';
import { InfoCardsCrudAddEditComponent } from './components/info-cards-crud-add-edit/info-cards-crud-add-edit.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { SignupUserComponent } from './components/signup-user/signup-user.component';
// HEADER INTERCEPTOR COPY TOKEN
import { HeaderInterceptor } from './headeredit.interceptor';
import { NavbarSecComponent } from './components/navbar-sec/navbar-sec.component';
import { SaberMasComponent } from './components/saber-mas/saber-mas.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SurveyComponent,
    SpinnerComponent,
    SurveyCrudComponent,
    SurveyCrudAddEditComponent,
    ProgressBarComponent,
    BarChartComponent,
    InfoCardsComponent,
    InfoCardsCrudComponent,
    InfoCardsCrudAddEditComponent,
    LoginUserComponent,
    SignupUserComponent,
    NavbarSecComponent,
    SaberMasComponent,
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
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor, // name of interceptor
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
