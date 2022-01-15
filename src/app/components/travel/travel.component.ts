import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent implements OnInit {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;

  map: google.maps.Map;
  foxchaseCoordinates = new google.maps.LatLng(
    40.21977421038948,
    -76.13873118849051
  );

  markers = [
    {
      position: {
        lat: 40.21977421038948,
        lng: -76.13873118849051,
      },
      clickable: true,
      title: 'Foxchase',
      options: {},
    },
    {
      position: {
        lat: 40.22125625561041,
        lng: -76.09662604616365,
      },
      clickable: true,
      title: 'Tru by Hilton Denver',
      options: {},
    },
    {
      position: {
        lat: 40.22304007938807,
        lng: -76.09825085965382,
      },
      clickable: true,
      title: 'Comfort Inn Lancaster County North',
      options: {},
    },
    {
      position: {
        lat: 40.22065836368004,
        lng:  -76.09815114802001,
      },
      clickable: true,
      title: 'Red Roof Inn Denver',
      options: {},
    },
  ];

  
  zoom = 13;
  center = this.foxchaseCoordinates;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  ngOnInit() {
  }
}
