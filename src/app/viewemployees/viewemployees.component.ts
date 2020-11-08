import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrls: ['./viewemployees.component.css']
})
export class ViewemployeesComponent implements OnInit {

  constructor(private service: DataService, private messageService: MessageService) { }

  employeeList: Array<any> = [];

  deleteEmployee(eId) {

    this.service.deleteEmployee(eId).subscribe(res => {

      if (res == 1) {

        this.messageService.add({
          severity: 'success',
          summary: 'DELETE',
          detail: 'RECORD DELETED'})
        this.service.viewEmployee().subscribe(res => {

          this.employeeList = res;

        }, err => {

          console.log("error")
        })



      }
      else {
        console.log("not deleted.")
      }
    }, err => {


    })
  }


  ngOnInit(): void {

    this.service.viewEmployee().subscribe(res => {

      this.employeeList = res;

    }, err => {

      console.log("error")
    })

  }

}
