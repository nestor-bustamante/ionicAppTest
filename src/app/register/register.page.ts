import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

// import { Sim } from '@ionic-native/sim/ngx';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    // private sim: Sim
  ) { }

  ngOnInit() {
    // console.log(this.sim);
  }

  async register() {

    // this.sim.getSimInfo().then(
    //   (info) => console.log('Sim info: ', info),
    //   (err) => console.log('Unable to get sim info: ', err)
    // );

    // this.sim.hasReadPermission().then(
    //   (info) => console.log('Has permission: ', info)
    // );

    // this.sim.requestReadPermission().then(
    //   () => console.log('Permission granted'),
    //   () => console.log('Permission denied')
    // );

    const { username, password } = this;
    try {
      // tipo de hack
      console.log('username, password ', username, password);
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password);
      
      this.router.navigate(['/home']);

    } catch (err) {
      console.dir(err.code);
      console.log(err.message);
    }

  }

}
