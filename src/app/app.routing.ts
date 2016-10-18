import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdviceComponent } from './advice/advice.component';
import { BankComponent } from './bank/bank.component';
import { CharComponent } from './char/char.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstaComponent } from './insta/insta.component';
import { JailComponent } from './jail/jail.component';
import { LinkinComponent } from './linkin/linkin.component';
import { NotepadComponent } from './notepad/notepad.component';
import { PetpageComponent } from './petpage/petpage.component';
import { PhishComponent } from './phish/phish.component';
import { SearchComponent } from './search/search.component';
import { StealComponent } from './steal/steal.component';
import { SuccessComponent } from './success/success.component';
import { TwitterComponent } from './twitter/twitter.component';
import { DummyComponent } from './dummy/dummy.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'advice', component: AdviceComponent },
    { path: 'bank', component: BankComponent },
    { path: 'char', component: CharComponent },
    { path: 'facebook', component: FacebookComponent },
    { path: 'insta', component: InstaComponent },
    { path: 'jail', component: JailComponent },
    { path: 'linkin', component: LinkinComponent },
    // not sure about this one? Think it will have to be embedded in the main app not as a separte page
    { path: 'notepad', component: NotepadComponent },
    { path: 'petpage', component: PetpageComponent },
    { path: 'phish', component: PhishComponent },
    { path: 'search', component: SearchComponent },
    { path: 'steal', component: StealComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'twitter', component: TwitterComponent },
    { path: 'dummy', component: DummyComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
