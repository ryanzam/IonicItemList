import { Item } from './../../model/item.model';
import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';


@Injectable()
export class ItemListService {
    
    private ItemListRef = this.db.list<Item>('item-list');
    
    constructor(private db: AngularFireDatabase) {
        
}
    getItemList() {
        return this.ItemListRef;
    }
    addItem(item:Item) {
        return this.ItemListRef.push(item);
    }

    editITem(item: Item) {
        return this.ItemListRef.update(item.key, item);
    }

}