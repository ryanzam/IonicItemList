import { Item } from './../../model/item.model';
import { ItemListService } from './../../services/item-list/item-list.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  item : Item

  constructor(public navCtrl: NavController, public navParams: NavParams, private ils:ItemListService) {
  }

  ionViewLoad() {
    this.item = this.navParams.get("item");
  }

  saveItem(item: Item){
    this.ils.editITem(item)
      .then(() => {
        this.navCtrl.setRoot("HomePage");
      })
  }

}
