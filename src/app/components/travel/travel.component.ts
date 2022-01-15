import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent {
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  map: google.maps.Map;
  center = new google.maps.LatLng(
    40.221268245900376,
    -76.11751855426823
  );
  infoContent = '';

  markers = [
    {
      position: {
        lat: 40.21977421038948,
        lng: -76.13873118849051,
      },
      clickable: true,
      title: 'Foxchase',
      options: {},
      info: '<a href="https://www.w3schools.com" target="_blank">Visit W3Schools.com!</a>',
    },
    {
      position: {
        lat: 40.22125625561041,
        lng: -76.09662604616365,
      },
      label: {
        color: 'black',
        text: 'A',
      },
      clickable: true,
      title: 'Tru by Hilton Denver',
      options: {},
      info: '<a href="https://maps.google.com/maps?ll=40.220914,-76.09695&z=15&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=6531310625964580266" target="_blank"  rel="noopener noreferrer">Tru by Hilton Denver</a>',
    },
    {
      position: {
        lat: 40.22304007938807,
        lng: -76.09825085965382,
      },
      label: {
        color: 'black',
        text: 'B',
      },
      clickable: true,
      title: 'Comfort Inn Lancaster County North',
      options: {},
      info: '<a href="https://maps.google.com/maps?ll=40.220964,-76.100033&z=16&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=7371147450018007612" target="_blank"  rel="noopener noreferrer">Comfort Inn Lancaster County North</a>',
    },
    {
      position: {
        lat: 40.22065836368004,
        lng: -76.09815114802001,
      },
      label: {
        color: 'black',
        text: 'C',
      },
      clickable: true,
      title: 'Red Roof Inn Denver',
      options: {},
      info: '<a href="https://maps.google.com/maps?ll=40.222029,-76.100033&z=16&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=17401549981416588360" target="_blank"  rel="noopener noreferrer">Red Roof Inn Denver</a>',
    },
  ];

  zoom = 14;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 8,
  };

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.infoWindow.open(marker);
    console.log(marker);
  }
}
