import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

// the below are the pages that we will cycle the users through
import { HomeComponent } from './home/home.component';
import { AdviceComponent } from './advice/advice.component';
import { BankComponent } from './bank/bank.component';
import { CharComponent } from './char/char.component';
import { FacebookComponent } from './facebook/facebook.component';
import { InstaComponent } from './insta/insta.component';
import { JailComponent } from './jail/jail.component';
import { LinkinComponent } from './linkin/linkin.component';
import { NoteAppComponent } from './notepad/notepad.component';
import { PhishComponent } from './phish/phish.component';
import { SearchComponent } from './search/search.component';
import { StealComponent } from './steal/steal.component';
import { SuccessComponent } from './success/success.component';
import { TwitterComponent } from './twitter/twitter.component';
import { DummyComponent } from './dummy/dummy.component';
//import { ResultItemComponent } from './result-item/result-item.component';
//import { ResultListComponent } from './result-list/result-list.component';
import { SidebarModule } from 'ng2-sidebar';
//import { RootComponent } from './root/root.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ProgressBarModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
import { Ng2Webstorage } from 'ng2-webstorage';
import { GrowlModule } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
//import { NoteService } from './notepad/notepad.service';
import { ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AdviceComponent,
        BankComponent,
        CharComponent,
        FacebookComponent,
        InstaComponent,
        JailComponent,
        LinkinComponent,
        NoteAppComponent,
        PhishComponent,
        SearchComponent,
        StealComponent,
        SuccessComponent,
        TwitterComponent,
        DummyComponent
    ],
    imports: [
    BrowserModule,
    FormsModule,
    SidebarModule,
    Ng2BootstrapModule,
    Ng2Webstorage,
    ProgressBarModule,DropdownModule,GrowlModule,ConfirmDialogModule,ModalModule,AlertModule,
    routing,
    ],
    providers: [appRoutingProviders,ConfirmationService],
    bootstrap: [AppComponent]
})

export class AppModule {}
