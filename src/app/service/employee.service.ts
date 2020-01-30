import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Employee} from '../modal/entity.employee';
import * as dataEmployee from "../assets/data/employess.json";


@Injectable(
  {
    providedIn: 'root'
  }
)
export class EmployeeService {

  private _url: string = "dataEmployee";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.;

   }
