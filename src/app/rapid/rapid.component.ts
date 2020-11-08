import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-rapid',
  templateUrl: './rapid.component.html',
  styleUrls: ['./rapid.component.css']
})
export class RapidComponent implements OnInit {

  constructor(private service: DataService) { }
  data:Array<any>=[];
  provinces:Array<any>=[];

  ngOnInit(): void {

    this.service.getCovidData().subscribe(res => {

      this.data = res;
      console.log(this.data[0].country)
      this.provinces =  this.data[0].provinces
      console.log(this.provinces[0].confirmed)


      
    }, err => {

    })
  }

}
