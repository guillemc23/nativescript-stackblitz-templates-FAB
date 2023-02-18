import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { registerElement } from '@nativescript/angular';
registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
);

import { View } from '@nativescript/core';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public _isFabOpen: boolean;
  @ViewChild('btna') btna: ElementRef;
  @ViewChild('btnb') btnb: ElementRef;
  @ViewChild('fab') fab: ElementRef;

  displayOptions() {
    console.log('FAB tapped');
    if (this._isFabOpen) {
      // Rotate main fab
      const fab = <View>this.fab.nativeElement;
      fab.animate({ rotate: 0, duration: 280, delay: 0 });

      // Show option 1
      const btna = <View>this.btna.nativeElement;
      btna.animate({
        translate: { x: 0, y: 0 },
        opacity: 0,
        duration: 280,
        delay: 0,
      });

      // Show option 2
      const btnb = <View>this.btnb.nativeElement;
      btnb.animate({
        translate: { x: 0, y: 0 },
        opacity: 0,
        duration: 280,
        delay: 0,
      });

      this._isFabOpen = false;
    } else {
      // Rotate main fab
      const view = <View>this.fab.nativeElement;
      view.animate({ rotate: 45, duration: 280, delay: 0 });

      // Show option 1
      const btna = <View>this.btna.nativeElement;
      btna.animate({
        translate: { x: 0, y: -80 },
        opacity: 1,
        duration: 280,
        delay: 0,
      });

      // Show option 2
      const btnb = <View>this.btnb.nativeElement;
      btnb
        .animate({
          translate: { x: 0, y: -80 },
          opacity: 1,
          duration: 280,
          delay: 0,
        })
        .then(() =>
          btnb.animate({
            translate: { x: 0, y: -145 },
            opacity: 1,
            duration: 280,
            delay: 0,
          })
        );
      // btnb.animate({ translate: { x: 0, y: -65 }, opacity: 1, duration: 280, delay: 140 });

      this._isFabOpen = true;
    }
  }
}
