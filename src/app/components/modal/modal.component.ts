import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  @Input()
  comment: string;

  @Output('update')
  myEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public modalController: ModalController,
    public toastController: ToastController
  ) {
    this.comment = ""
  }

  close() {
    this.modalController.dismiss();
  }

  fireMyEvent(comment: string) {
    this.myEvent.emit(comment);
    console.log('fireMyEvent: ', comment);
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
      
      
      // window.localStorage.setItem('userMessage', JSON.stringify(userObj));
      setTimeout(() => {
        this.close();
      }, 2000)
    }

    this.fireMyEvent(message);
    
  }


}
