import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AdmindetailComponent } from './admindetail/admindetail.component';
import { ViewadminsComponent } from './viewadmins/viewadmins.component';


const routes: Routes = [

  {path:'addadmin',component:AddadminComponent},
  {path:'viewadmins',component:ViewadminsComponent},
  {path:'admindetail/:id',component:AdmindetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
