import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
