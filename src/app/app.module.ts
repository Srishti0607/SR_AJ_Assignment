import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    RouterModule.forRoot(APP_ROUTES)
    // BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule1 {
  constructor(){
    console.log('In assignment')
  }
  
 }
