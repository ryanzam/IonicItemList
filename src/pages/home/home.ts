import { Item } from './../../model/item.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { ItemListService } from './../../services/item-list/item-list.service';
import { Observable } from 'rxjs/Observable';



@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    itemList$: Observable<Item[]>

  constructor(public navCtrl: NavController, private ils: ItemListService) {
    this.itemList$ = this.ils
                      .getItemList()
                      .snapshotChanges()
                      .map(changes =>{
                        return changes.map(c=> ({
                          key: c.payload.key, ...c.payload.val()
                        }))
                      }
                        
                      )
  }



}
