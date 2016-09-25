import { Component } from '@angular/core';
import { ViewController, Storage, LocalStorage, NavController } from 'ionic-angular';
import {TaskService} from '../../providers/task-service/task-service';

@Component({
  templateUrl: 'build/pages/edit-task/edit-task.html',
  providers: [TaskService]
})
export class EditTaskPage {
  public task: any;
  public local: any;

  constructor(public viewCtrl: ViewController, private navCtrl: NavController, public taskService : TaskService) {
    this.task = {};
    this.local = new Storage(LocalStorage);
    this.local.get('task').then(data => {
      this.task = JSON.parse(data || '{}');
      console.log(this.task);
    });
  }

  dismiss() {
   this.task = {};
   this.viewCtrl.dismiss();
 }

  editTask(task){
    this.task = task;
    this.taskService.editTask(task.id, task)
      .then(data => {
        this.task = data;
      })
      this.dismiss();
      this.loadTasks();
  }

  deleteTask(task){
    this.taskService.deleteTask(task.id)
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
