import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastSerice {
    constructor(private toastCtrl: ToastController) {

    }
    displayMsg(message: string, duration: number=3000) {
        return this.toastCtrl.create({
            message, duration,
        }).present();
    }

}