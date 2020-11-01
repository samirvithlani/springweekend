import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  addemployee(model):Observable<any>{

    return this.http.post('http://localhost:8080/employee/addEmployee',model);
  }
  viewEmployee():Observable<any>{

    return this.http.get("http://localhost:8080/employee/viewEmployee")
  }

  getdatdummy():Observable<any>{

    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }
}
