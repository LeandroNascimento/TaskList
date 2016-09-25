import { Component } from '@angular/core';
import { Storage, LocalStorage, ViewController, NavController } from 'ionic-angular';
import {TaskService} from '../../providers/task-service/task-service';

@Component({
  templateUrl: 'build/pages/task/task.html',
  providers: [TaskService]
})
export class TaskPage {
  public task: any;
  public local: any;

  constructor(public viewCtrl: ViewController, private navCtrl: NavController, public taskService : TaskService) {
    this.task = {};
  }

  dismiss() {
   this.task = {};
   this.viewCtrl.dismiss();
 }

 addTask(task){
   this.taskService.addTask(task)
     .then(data => {
       this.task = data;
     })
     this.dismiss();
     this.loadTasks();
 }

 loadTasks() {
   this.taskService.allTasks()
     .then(data => {
       this.local = new Storage(LocalStorage);
       this.local.set('tasks', data);
     })
 }
}
