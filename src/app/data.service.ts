import { query } from '@angular/animations';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  addemployee(model): Observable<any> {

    return this.http.post('http://localhost:8080/employee/addEmployee', model);
  }
  viewEmployee(): Observable<any> {

    return this.http.get("http://localhost:8080/employee/viewEmployee")
  }
  deleteEmployee(id): Observable<any> {

    return this.http.delete("http://localhost:8080/employee/delete/" + id)
  }

  getdatdummy(): Observable<any> {

    return this.http.get("http://dummy.restapiexample.com/api/v1/employees");
  }

  getCovidData(): Observable<any> {

    return this.http.get("https://covid-19-data.p.rapidapi.com/report/country/name", {
      headers: new HttpHeaders().set('x-rapidapi-key', '2cc1fb7fd1msh4c4e1eb5e0cf8e5p13cfd1jsn422b10471be6').set('x-rapidapi-host', 'covid-19-data.p.rapidapi.com'),
      params: new HttpParams().set('date', '2020-04-01').set('name', 'India')
    }
    )
  }
}
