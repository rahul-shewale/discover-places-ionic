import { Injectable } from '@angular/core';
import { Place } from './place.modal';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places : Place[] = [
    new Place(
      'p1',
      'Mumbai',
      'Mumbai meri jan, sbaka bhaijan salman khan',
      'https://media.istockphoto.com/id/1323859450/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=1024x1024&w=is&k=20&c=VbFoepb5UzlSniQ8IBaZhnCVRc16RBVBeUGRMp260Y4=',
      149.99
    ),
    new Place(
      'p2',
      'Delhi',
      'Delhi he dil valo ki, dilwale dulhaniya le jayenge',
      'https://media.istockphoto.com/id/1323859450/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=1024x1024&w=is&k=20&c=VbFoepb5UzlSniQ8IBaZhnCVRc16RBVBeUGRMp260Y4=',
      130.99
    ),
    new Place(
      'p3',
      'Lucknow',
      'Muskarayiy aap lucknow mai hai, varna katta taiyar hai!',
      'https://media.istockphoto.com/id/1323859450/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.jpg?s=1024x1024&w=is&k=20&c=VbFoepb5UzlSniQ8IBaZhnCVRc16RBVBeUGRMp260Y4=',
      120.99
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlace(id: string): Place | null {
    const new_place = this._places.find(p => p.id === id);
    return new_place ? { ...new_place } : null;
  }
  constructor() { }
}
