import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MuseumsService } from '../museums.service';
declare var google;

@Component({
  selector: 'app-mapview',
  templateUrl: './mapview.page.html',
  styleUrls: ['./mapview.page.scss'],
})
export class MapviewPage implements OnInit {

  map;
  museumData : any[] = [];
  @ViewChild('map', {static: true}) mapContent:ElementRef;
 
  constructor(
    private museumService: MuseumsService) { }
 
  ngOnInit() {
    this.museumData = this.museumService.getMuseums();   
    this.displayGoogleMap();
    this.getMarkers();
  }
  
  displayGoogleMap() {
    let latLng = new google.maps.LatLng(-32.2068607, -51.9103324);

    this.map = new google.maps.Map(this.mapContent.nativeElement,{
      center: latLng,
    
      zoom:10,
      mapTypeId: google.maps.MapTypeId.HYBRID
    });
  }

  getMarkers() {
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < this.museumData.length; _i++) {
      if (_i => 0) {
        this.addMarkersToMap(this.museumData[_i]);
      }
    }
  }

  addMarkersToMap(museum) {
    const position = new google.maps.LatLng(museum.latitude, museum.longitude);
    const museumMarker = new google.maps.Marker({ position, title: museum.name });
    museumMarker.setMap(this.map);
  }
}