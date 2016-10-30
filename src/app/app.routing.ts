import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdviceComponent } from './advice/advice.component';
import { BankComponent } from './bank/bank.component';
import { CharComponent } from './char/char.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstaComponent } from './insta/insta.component';
import { JailComponent } from './jail/jail.component';
import { LinkinComponent } from './linkin/linkin.component';
import { PhishComponent } from './phish/phish.component';
import { SearchComponent } from './search/search.component';
import { StealComponent } from './steal/steal.component';
import { SuccessComponent } from './success/success.component';
import { TwitterComponent } from './twitter/twitter.component';
import { DummyComponent } from './dummy/dummy.component';
import { RootService } from './root/root.service';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'advice', component: AdviceComponent },
    { path: 'bank', component: BankComponent },
    { path: 'char', component: CharComponent },
    { path: 'facebook', component: FacebookComponent },
    { path: 'insta', component: InstaComponent },
    { path: 'jail', component: JailComponent },
    { path: 'linkin', component: LinkinComponent },
    { path: 'phish', component: PhishComponent },
    { path: 'search', component: SearchComponent },
    { path: 'steal', component: StealComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'twitter', component: TwitterComponent },
    { path: 'dummy', component: DummyComponent },
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
