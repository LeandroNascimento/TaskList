import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {
  public data: any;
  private headers = new Headers({'Content-Type': 'application/json', 'apiKey' : '26e81eb2-80f3-11e6-ae22-56b6b6499611'});

  constructor(private http: Http) { }

  allTasks() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:8000/api/v1/tasks', {headers: this.headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.data = data;
          resolve(this.data);
        });
    });
  }

  addTask(data) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.post('http://localhost:8000/api/v1/task', data, {headers: this.headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.data = data;
          resolve(this.data);
        });
    });
  }

  editTask(id, data) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.put('http://localhost:8000/api/v1/tasks/' + id, data, {headers: this.headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.data = data;
          resolve(this.data);
        });
    });
  }

  deleteTask(id) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.delete('http://localhost:8000/api/v1/tasks/' + id, {headers: this.headers})
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
