import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AdmindetailComponent } from './admindetail/admindetail.component';
import { RapidComponent } from './rapid/rapid.component';
import { ViewadminsComponent } from './viewadmins/viewadmins.component';
import { ViewemployeesComponent } from './viewemployees/viewemployees.component';


const routes: Routes = [

  { path: 'addadmin', component: AddadminComponent },
  { path: 'viewadmins', component: ViewadminsComponent },
  { path: 'admindetail/:id', component: AdmindetailComponent },
  { path: 'addemployee', component: AddemployeeComponent },
  { path: 'viewemployee', component: ViewemployeesComponent },
  { path: 'covid', component: RapidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
