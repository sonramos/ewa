import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Company} from "./model/company";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  api = `${environment.api}companies/`;

  constructor(private httpClient: HttpClient) {}

  insert(newCompany: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.api, newCompany);
  }

  list(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.api);
  }

  pagedList(page: number, pageSize: number):Observable<Company> {
    return this.httpClient.get<Company>(`${this.api}?page=${page}&pageSize=${pageSize}`);
  }

  delete(id: number): Observable<object>{
    return this.httpClient.delete(`${this.api}${id}`)
  }

  update(company: Company): Observable<object>{
    return this.httpClient.put(`${this.api}${company.id}`, company);
  }

  searchById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(`${this.api}${id}`);
  }

}
