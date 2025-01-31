import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.modal';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  standalone: false
})
export class DiscoverPage implements OnInit {
  
  public loadedPlaces : Place[] = [];
  constructor(private placesService: PlacesService,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  openMenu() {
    this.menuCtrl.toggle();
  }

}
