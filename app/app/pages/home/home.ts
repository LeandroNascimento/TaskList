import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { TaskPage } from '../task/task';
import {TaskService} from '../../providers/task-service/task-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [TaskService]
})
export class HomePage {
  public tasks: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public taskService: TaskService) {
    this.loadTask();
  }

  loadTask() {
    this.taskService.allTasks()
      .then(data => {
        this.tasks = data;
        console.log(this.tasks);
      })
  }

  modalAddTask() {
    let modal = this.modalCtrl.create(TaskPage);
    modal.present();
  }

  modalEditTask() {
    let modal = this.modalCtrl.create(TaskPage);
    modal.present();
  }
}
