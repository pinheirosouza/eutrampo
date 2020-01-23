import { Injectable } from '@angular/core';
import { Museum } from './museums'

@Injectable({
  providedIn: 'root'
})
export class MuseumsService {
  museums: [];
  museum: Museum;

  constructor() { }

  setMuseums(data) {
    this.museums = data;
  }

  getMuseums() {
    return this.museums;
  }

  setMuseum(data) {
    this.museum = data;
  }

  getMuseum() {
    return this.museum;
  }
}