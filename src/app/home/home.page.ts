import { Component, OnInit, Input } from '@angular/core';

import { Map, tileLayer, marker } from 'leaflet';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as Leaflet from 'leaflet';
import { ModalController } from '@ionic/angular';
// import { ModalComponent } from './../components/modal/modal.component';
// import { TabsComponent } from './../components/tabs/tabs.component';
import { ModalPage } from '../pages/modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
  

export class HomePage implements OnInit {


  map: Map;

  message: string = '';
  // @Input() public comment: string = '';

  getFireMyEvent(event: Event) {
    console.log(event);
    // this.message = comment;
  }

  constructor(
    public geolocation: Geolocation,
    private modalController: ModalController,
    
  ) {
    this.getGeolocation();
  }

  removeBrand() {
    const brandCont = document.querySelector('.leaflet-touch .leaflet-control-attribution');
    brandCont.remove();
  }

  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      
      this.leafletMap(resp.coords.latitude, resp.coords.longitude);

      // console.log(resp);

      const date = new Date(resp.timestamp);
      // console.log(date);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    // console.log(this.geolocation);
    watch.subscribe((data) => { 
      // console.log(data.coords.latitude);
      // console.log(data.coords.longitude);
    });
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        message: this.message
      }
    });
    return await modal.present();
  }

  leafletMap(getLat: number, getLong: number) {

    const addIcon = Leaflet.icon({
      iconUrl: 'https://www.maracajaukitecenter.com/wp-content/uploads/pin-map.png',
      iconRetinaUrl: 'https://www.maracajaukitecenter.com/wp-content/uploads/pin-map.png',
      iconSize: [36, 36],
    });

    this.map = new Map('mapId').setView([getLat, getLong], 13);
    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png').addTo(this.map);
    const markPoint = marker([getLat, getLong], {icon: addIcon});

    markPoint.bindPopup(this.message || 'Publica un comentario');
    this.map.addLayer(markPoint);  
  }

  // getValue(event: string) {
  //   console.log('Evento: ', event);
  //   this.message = event;
  // }

  ngOnInit() {
    // this.comment = this.navParams.get('message');
  }

  ionViewDidLoad() {
    this.getGeolocation();
    this.removeBrand();
    // this.getMessage(Event);
    // window.addEventListener("message", this.getMessage, false);
    // this.leafletMap();
    // this.getLatLon();
  }

  ionViewWillLeave() {
    this.map.remove();
  }


}
