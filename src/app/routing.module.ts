import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const APP_ROUTES: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

/**
 * Main client routing configuration module
 */
@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
