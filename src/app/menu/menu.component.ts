import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  menuArray: Array<any> = [
    { title: 'addadmin', link: 'addadmin' },
    { title: 'viewadmins', link: 'viewadmins' }
  
  ]

  ngOnInit(): void {


  }

}
