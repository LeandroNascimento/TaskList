import { Component } from '@angular/core';
import { ViewController, Storage, LocalStorage, ModalController, NavController } from 'ionic-angular';
import { TaskPage } from '../task/task';
import { EditTaskPage } from '../edit-task/edit-task';
import {TaskService} from '../../providers/task-service/task-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [TaskService]
})
export class HomePage {
  public tasks: any;
  public local: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public modalCtrl: ModalController, public taskService: TaskService) {
    this.loadTask();
  }

  ionViewDidEnter() {
        console.log('a');
        setTimeout(1000);
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

  modalEditTask(task) {
    this.local = new Storage(LocalStorage);
    this.local.set('task', JSON.stringify(task));
    let modal = this.modalCtrl.create(EditTaskPage);
    modal.present();
  }
}
