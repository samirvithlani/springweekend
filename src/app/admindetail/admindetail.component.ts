import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admindetail',
  templateUrl: './admindetail.component.html',
  styleUrls: ['./admindetail.component.css']
})
export class AdmindetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) {

    console.log(route)
   }
   AdminList: Array<any> = [
    { admin_name: "samir", admin_email: "samir@gmail.com", admin_age: 20 },
    { admin_name: "raj", admin_email: "raj@gmail.com", admin_age: 22 },
    { admin_name: "parth", admin_email: "parth@gmail.com", admin_age: 23 },
    { admin_name: "jay", admin_email: "jay@gmail.com", admin_age: 24 }

  ]

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id)
  }

}
