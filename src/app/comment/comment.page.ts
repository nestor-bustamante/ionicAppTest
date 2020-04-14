import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { FirestoreService } from '../firestore.service';
import { Comment } from '../comment';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.page.html',
  styleUrls: ['./comment.page.scss'],
})
export class CommentPage implements OnInit {

  state$: Observable<object>;
  comment: any = null;
  description = '';
  user = JSON.parse(window.localStorage.getItem('fb'));

  dataToSave: Comment;

  constructor(
    public toastController: ToastController,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private firestoreService: FirestoreService
  ) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Perfecto!',
      duration: 1600
    });
    toast.present();
  }

  saveDescription(): void {
    this.presentToast();
    this.dataToSave = {
      user: window.localStorage.getItem('userName'),
      userImg: window.localStorage.getItem('userImg'),
      comment: this.description,
      latlang: window.localStorage.getItem('latlang')
    }
    this.firestoreService.insertar("comments", this.dataToSave).then(() => {
      this.dataToSave = {} as Comment;
      console.log('Tarea creada correctamente!');
    }, (error) => {
      console.error(error);
    });
    setTimeout(() => {
      this.router.navigateByUrl('/map', { state: { data: { message: this.description } } });
    }, 2000);
  }

  getDescription() {
    const getButton = window.document.getElementById('save');
    if (this.description.length >= 10) {
      getButton.removeAttribute('disabled');
    }
  }

  close() {
    this.router.navigate(["/map"]);
  }

  async saveMessage() {
    const getButton = window.document.getElementById('save');
    if (this.description.length >= 10) {
      getButton.removeAttribute('disabled');
    }
  }

  ngOnInit() {
    this.state$ = this.router.events.pipe(
      filter(e => e instanceof NavigationStart),
      map(() => this.router.getCurrentNavigation().extras.state)
    );
  }

}
