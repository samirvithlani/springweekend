import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sundayAngular';
  name: string = "samir";
  age: number = 20;
  isActive: boolean = true;

  birthDate: any = "1995-02-14";

  employees: Array<any> = [
    "jay", "raj", "parth", "hem", "meet"
  ];

  students: Array<any> = [

    { name: "samir", age: 20 },
    { name: "raj", age: 22 },
    { name: "parth", age: 24 },
    { name: "hem", age: 19 }

  ]


}
