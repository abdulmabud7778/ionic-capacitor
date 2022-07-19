import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
const STORAGE_KEY = 'myList';

@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private storage: Storage) { 
    this.init();
  }

  init() {
    this.storage.create();
  }

  getData() {
    return this.storage.get(STORAGE_KEY) || [];
  }
 
  async addData(item) {
    const storeData = await this.storage.get(STORAGE_KEY) || [];
    storeData.push(item);
    return this.storage.set(STORAGE_KEY, storeData);
  }
}
