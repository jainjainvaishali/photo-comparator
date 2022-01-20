import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-photo-comparator',
  templateUrl: './photo-comparator.component.html',
  styleUrls: ['./photo-comparator.component.css']
})
export class PhotoComparatorComponent implements OnInit, OnDestroy {
  public photos: any = [];
  public comparisonTable: any = [];
  public photos$: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.photos$ = Subscription;
    this.getPhotos(1);
  }

  /**
   * This function will fetch all the photos of the particular album.
   * @param albumId
   */
  getPhotos(albumId: number) {
    this.photos$ = this.http.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`).subscribe((data: any) => {
      this.photos = data;
      for (let i = 0; i < this.photos.length; i++) {
        this.photos[i].remove = false;
      }
    });
  }

  /**
   * This function will add the photo to the comparison table and
   * turn compare button to remove button
   * @param photo
   * @param id
   */
  comparePhoto(photo: object, id: number) {
    this.comparisonTable.push(photo);
    for (let i = 0; i < this.photos.length; i++) {
      if (this.photos[i].id === id) {
        this.photos[i].remove = true;
      }
    }
  }

  /**
   * This function will remove the photo from the comparison table
   * @param id
   */
  removePhoto(id: number) {
    for (let i = 0; i < this.comparisonTable.length; i++) {
      if (this.comparisonTable[i].id === id) {
        this.comparisonTable.splice(i, 1);
      }
    }
  }

  /**
   * Clean up
   */
  ngOnDestroy() {
    if(this.photos$) {
      this.photos$.unsubscribe();
    }
  }

}
