import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.modal';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
  standalone: false
})
export class OfferBookingsPage implements OnInit {
  place!: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placeServices: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap => {
      console.log(paraMap.get('placeId'));
      if (!paraMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      const placeId = paraMap.get('placeId');
      if (!placeId) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      const new_place = this.placeServices.getPlace(placeId);
      if (!new_place) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      this.place = new_place;
    });
  }
}
