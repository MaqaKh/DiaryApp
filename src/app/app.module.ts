import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './home/register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { MainComponent } from './home/main/main.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'main', component: MainComponent }  
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
