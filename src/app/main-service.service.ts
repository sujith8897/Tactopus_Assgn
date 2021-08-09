import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  baseURL = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  addTeacher(data:object){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.baseURL + '/add-teacher', data, {headers:headers, reportProgress: true, observe: 'events'});
  }

  editTeacher(data:object,id:string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.baseURL + '/edit-teacher?id=' + id, data, {headers:headers, reportProgress: true, observe: 'events'});
  }

  deleteTeacher(id:string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<string[]>(this.baseURL + '/delete-teacher?id=' + id, {headers: headers});
  }

  getServices(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<string[]>(this.baseURL + '/services', {headers: headers});
  }

  getLanguages(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<string[]>(this.baseURL + '/languages', {headers: headers});
  }

  getAllTeachers(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<string[]>(this.baseURL + '/get-all-teachers', {headers: headers});
  }

  filterTeachers(query:string){
    console.log(this.baseURL + '/get-all-teachers' + query);
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<string[]>(this.baseURL + '/get-all-teachers' + query, {headers: headers});
  }

  getTeacherInfo(id:string){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<string[]>(this.baseURL + '/get-teacher-info?id=' + id, {headers: headers});
  }

}
