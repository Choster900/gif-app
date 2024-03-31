import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',

})
export class LazyimageComponent implements OnInit {

  @Input()
  public url!: string;
  @Input()
  public alt!: string;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if( !this.url ) throw new Error('url property not implemented.');
  }

  onLoad(): void {
    console.log("Image loaded successfully");
    this.hasLoaded = true;

  }
}
