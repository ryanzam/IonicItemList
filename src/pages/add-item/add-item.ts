import { ItemListService } from './../../services/item-list/item-list.service';
import { Item } from './../../model/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  item: Item = {
    name: '',
    number: undefined,
    price: undefined,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
     private itemService: ItemListService) {
  }

  ionViewDidLoad() {
    console.log(' AddItemPage');
  }

  addItem(item:Item){
    this.itemService.addItem(item).then(ref => {
      this.navCtrl.setRoot('HomePage', {key: ref.key})
    })

  }

}
