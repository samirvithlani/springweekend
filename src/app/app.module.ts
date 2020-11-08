import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { ViewadminsComponent } from './viewadmins/viewadmins.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdmindetailComponent } from './admindetail/admindetail.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { HttpClientModule } from "@angular/common/http";
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem, MessageService} from 'primeng/api';  
import {ToastModule} from 'primeng/toast';
import { ViewemployeesComponent } from './viewemployees/viewemployees.component';
import {TableModule} from 'primeng/table';
import { RapidComponent } from './rapid/rapid.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddadminComponent,
    ViewadminsComponent,
    HeaderComponent,
    FooterComponent,
    AdmindetailComponent,
    UsermenuComponent,
    AddemployeeComponent,
    ViewemployeesComponent,
    RapidComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    ToastModule,
    TableModule
    
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
