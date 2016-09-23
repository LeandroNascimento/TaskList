import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import {TaskService} from '../../providers/task-service/task-service';

@Component({
  templateUrl: 'build/pages/task/task.html',
  providers: [TaskService]
})
export class TaskPage {
  public task: any;

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
       console.log(this.task);
     })
 }

 editTask(id, task){
   this.taskService.editTask(id, task)
     .then(data => {
       this.task = data;
       console.log(this.task);
     })
 }

}
