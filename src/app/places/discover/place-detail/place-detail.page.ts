import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.modal';
import { PlacesService } from '../../places.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false
})
export class PlaceDetailPage implements OnInit {

    place! : Place;
    constructor(
      private placesService: PlacesService,
      private route: ActivatedRoute,
      private navCtrl: NavController
    ) { }
  

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap => {
      if (!paraMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      const placeId = paraMap.get('placeId');
      if (!placeId) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      const new_place = this.placesService.getPlace(placeId);
      if (!new_place) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }

      this.place = new_place;    
    });
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
  }
}
