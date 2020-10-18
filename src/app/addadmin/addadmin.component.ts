import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  constructor() { }
  AdminList: Array<any> = [
    { admin_name: "samir", admin_email: "samir@gmail.com", admin_age: 20 },
    { admin_name: "raj", admin_email: "raj@gmail.com", admin_age: 22 },
    { admin_name: "parth", admin_email: "parth@gmail.com", admin_age: 23 },
    { admin_name: "jay", admin_email: "jay@gmail.com", admin_age: 24 }

  ]
  tempList: Array<any> = [];

  filterData(value) {

    this.AdminList = this.tempList.filter(i => i.admin_name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
  srt:boolean;
  buttontext:string="SORT";
  sort() {

    //false
    //true
    this.srt = !this.srt;
    if (this.srt) {
      this.buttontext = "DESC"
      this.AdminList = this.tempList.sort((i, j) => (i.admin_name > j.admin_name) ? 1 : -1)
    }
    else {
      this.buttontext = "ASC"
      this.AdminList = this.tempList.sort((i, j) => (i.admin_name > j.admin_name) ? -1 : 1)
    }

  }
  ngOnInit(): void {

    this.tempList = this.AdminList;
  }

}
