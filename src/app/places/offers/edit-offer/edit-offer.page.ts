import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.modal';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
  standalone: false
})
export class EditOfferPage implements OnInit {
  place! : Place;

  constructor(private route: ActivatedRoute ,private placesService: PlacesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paraMap => {
      if (!paraMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      const placeId = paraMap.get('placeId');
      if (!placeId) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      const new_place = this.placesService.getPlace(placeId);
      if (!new_place) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }

      this.place = new_place;    
    });
  }

}
