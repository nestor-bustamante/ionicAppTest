import { Component, Input } from '@angular/core';
// import { videoToFacebookLive } from 'video-to-facebook-live';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {

  videos: any[];
  @Input() message: string;

  rtmp_uri: string = "rtmps://live-api-s.facebook.com:443/rtmp/";
  stream_key: string = "10221197523184546?s_bl=1&s_sc=10221197523424552&s_sw=0&s_vt=api-s&a=AbwmrtYvKUr-OUzA";
  video_file: string = "./../../../assets/video/video_sample.mp4";

  constructor(public modalController: ModalController) {

  }

  getComment(comment: string) {
    this.message = comment;
    console.log(this.message);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        message: this.message
      }
    });
    return await modal.present();
  }

  startVideo() {
  }

  startFbVideo() {
    // this.fblive.fromFile(this.video_file, this.rtmp_uri + this.stream_key);
  }


}
