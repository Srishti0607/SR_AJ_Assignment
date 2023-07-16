import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const APP_ROUTES: Routes = [
    { path: '', component: LandingPageComponent, pathMatch: 'full'}
];