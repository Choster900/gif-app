import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  template: `
      <h5>Buscar:</h5>
      <input type="text" placeholder="Buscar Gifs..." class="form-control" (keyup.enter)="searchTag(  )" #txtTagInput>
  `,
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor( private GifsService: GifsService ) {}

  searchTag(  ) {
    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.searchTag( newTag )

    this.tagInput.nativeElement.value = '';
  }
}
