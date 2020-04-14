import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker } from 'leaflet';
import * as Leaflet from 'leaflet';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit{
  
  private state$: Observable<object>;
  comment: any = null;
  map: Map;
  getLat: any;
  getLong: any;
  commentsArr: Array<object> = [];

  constructor(
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private firestoreService: FirestoreService
  ) { }

  async leafletMap() {

    const addIcon = Leaflet.icon({
      iconUrl: 'https://webstockreview.net/images/clipart-map-pin-point-18.png',
      iconRetinaUrl: 'https://webstockreview.net/images/clipart-map-pin-point-18.png',
      iconSize: [32, 32],
    });

    const getLatLang = window.localStorage.getItem('latlang').split(',');
    

    this.map = new Map('mapId').setView([parseFloat(getLatLang[0]), parseFloat(getLatLang[1])], 13);
    tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);

    const getAllComments = this.firestoreService.obtener("comments");
    const myMap = this.map;
    getAllComments.subscribe({
      next(item) {
        item.forEach((data: any) => {
          
          const customOptions = { 'className': 'userData' }
          const item = data.payload.doc.data();
          const getLatLang = item.latlang.split(',');
          const popUpBubble = `${item.comment}
                            <div class="user-map">
                              <div class="user-img"><img src="${item.userImg}" /></div>
                              <div class="user-name">${item.user}</div>
                            </div>`;
          const markPoint = marker([parseFloat(getLatLang[0]), parseFloat(getLatLang[1])], { icon: addIcon });
          markPoint.bindPopup(popUpBubble, customOptions).addTo(myMap);
        });
        
      },
      error(msg) {
        console.log(msg);
      }
    })
    this.removeBrand();
  }

  async removeBrand() {
    const brandCont = document.querySelector('.leaflet-control-attribution.leaflet-control');
    brandCont.remove();
  }

  postComment() {
    this.router.navigate(["/comment"]);
  }

  async getComment(state: any) {
    await state.subscribe((item: any) => {
      if (item.hasOwnProperty('data')) {
        this.comment = item.data.message;
      }
    });
  }

  ngOnInit() {
    console.log('ngOnInit()');
    this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));
    this.getComment(this.state$);  
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter()')
    this.leafletMap();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter()')
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
