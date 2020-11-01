import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private service:DataService) { }

  employee:any;
  EmployeeList:Array<any>=[];
  message:string = "no data Found";

  dummy(){

    console.log("function called")
    this.service.getdatdummy().subscribe(res=>{

      console.log(res.data)
      console.log(res.status)
      this.EmployeeList = res.data;
      this.message = "data found"

    },err=>{
        console.log({"Error":err})
    })
  }

  

  ngOnInit(): void {


/*     this.service.viewEmployee().subscribe(res=>{

      console.log(res)
      this.EmployeeList = res;

    },err=>{

    })

    this.employee ={
      eName:"samir",eEmail:"samir@gmail.com",ePassword:"samir@gmail.com",
      eSalary:"12000",eAge:20

    }

    this.service.addemployee(this.employee).subscribe(res=>{

      console.log(res)

    },err=>{

      console.log(err)

    })
  
 */
  }
}
