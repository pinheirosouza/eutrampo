import { Injectable } from '@angular/core';
import { Hired } from './hired'

@Injectable({
  providedIn: 'root'
})
export class HiredService {
  hiredList: [];
  hired: Hired;

  constructor() { }

  setHiredList(data) {
    this.hiredList = data;
  }

  getHiredList() {
    return this.hiredList;
  }

  setHired(data) {
    this.hired = data;
  }

  getHired() {
    return this.hired;
  }
}