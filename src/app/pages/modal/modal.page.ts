import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  public comment = ''
  @Output() changeValue: EventEmitter<string> = new EventEmitter();

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.comment = this.navParams.get('message')
  }

  async saveMessage(message: any) {

    if (message.length < 10) {
      const toast = await this.toastController.create({
        message: 'Tu mensaje debería contener al menos 10 caracteres',
        duration: 1600
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Mensaje guardado con éxito',
        duration: 1600
      });
      toast.present();
      this.comment = message;

      this.changeValue.emit(this.comment)

      setTimeout(() => {
        this.closeModal();
      }, 2000)
    }

    console.log(this.comment);

  }

  closeModal() {
    this.modalController.dismiss();
  }

}
