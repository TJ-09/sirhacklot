import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

// the below are the pages that we will cycle the users through
import { HomeComponent } from './home/home.component';
import { CharComponent } from './char/char.component';
import { JailComponent } from './jail/jail.component';
import { NoteAppComponent } from './notepad/notepad.component';
import { PhishComponent } from './phish/phish.component';
import { SearchComponent } from './search/search.component';
import { StealComponent } from './steal/steal.component';
import { SuccessComponent } from './success/success.component';
import { SidebarModule } from 'ng2-sidebar';
import { ProgressBarModule, DropdownModule,Message,GrowlModule,ConfirmDialogModule,ConfirmationService } from 'primeng/primeng';
import { Ng2Webstorage } from 'ng2-webstorage';
import { Ng2BootstrapModule,AlertModule, ModalModule} from 'ng2-bootstrap/ng2-bootstrap';
import { PdfViewerComponent } from 'ng2-pdf-viewer';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        CharComponent,
        JailComponent,
        NoteAppComponent,
        PhishComponent,
        SearchComponent,
        StealComponent,
        SuccessComponent,
        PdfViewerComponent
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
