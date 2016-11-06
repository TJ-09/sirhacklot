import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdviceComponent } from './advice/advice.component';
import { CharComponent } from './char/char.component';
import { JailComponent } from './jail/jail.component';
import { PhishComponent } from './phish/phish.component';
import { SearchComponent } from './search/search.component';
import { StealComponent } from './steal/steal.component';
import { SuccessComponent } from './success/success.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'advice', component: AdviceComponent },
    { path: 'char', component: CharComponent },
    { path: 'jail', component: JailComponent },
    { path: 'phish', component: PhishComponent },
    { path: 'search', component: SearchComponent },
    { path: 'steal', component: StealComponent },
    { path: 'success', component: SuccessComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
