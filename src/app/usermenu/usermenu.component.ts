import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermenu',
  templateUrl: './usermenu.component.html',
  styleUrls: ['./usermenu.component.css']
})
export class UsermenuComponent implements OnInit {

  constructor() { }

  menuArray: Array<any> = [
    { title: 'addemployee', link: 'addemployee' },
    { title: 'viewemployee', link: 'viewemployee' },
    { title: 'covid', link: 'covid' }

  ]
  ngOnInit(): void {
  }

}
