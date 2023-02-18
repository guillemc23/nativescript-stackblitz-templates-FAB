import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { registerElement } from '@nativescript/angular';
registerElement(
  'Fab',
  () => require('@nstudio/nativescript-floatingactionbutton').Fab
);

import { Animation, CoreTypes, View } from '@nativescript/core';

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
  @ViewChild('labela') labela: ElementRef;
  @ViewChild('btnb') btnb: ElementRef;
  @ViewChild('labelb') labelb: ElementRef;
  @ViewChild('btnc') btnc: ElementRef;
  @ViewChild('labelc') labelc: ElementRef;
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

      const labela = <View>this.labela.nativeElement;
      labela.animate({
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

      const labelb = <View>this.labelb.nativeElement;
      labelb.animate({
        translate: { x: 0, y: 0 },
        opacity: 0,
        duration: 280,
        delay: 0,
      });
      // Show option 3
      const btnc = <View>this.btnc.nativeElement;
      btnc.animate({
        translate: { x: 0, y: 0 },
        opacity: 0,
        duration: 280,
        delay: 0,
      });

      const labelc = <View>this.labelc.nativeElement;
      labelc.animate({
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
      const labela = <View>this.labela.nativeElement;
      labela.animate({
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

      const labelb = <View>this.labelb.nativeElement;
      labelb
        .animate({
          translate: { x: 0, y: -80 },
          opacity: 1,
          duration: 280,
          delay: 0,
        })
        .then(() =>
          labelb.animate({
            translate: { x: 0, y: -145 },
            opacity: 1,
            duration: 280,
            delay: 0,
          })
        );
      // btnb.animate({ translate: { x: 0, y: -65 }, opacity: 1, duration: 280, delay: 140 });

      // Show option 3
      const btnc = <View>this.btnc.nativeElement;
      btnc
        .animate({
          translate: { x: 0, y: -80 },
          opacity: 1,
          duration: 280,
          delay: 0,
        })
        .then(() =>
          btnc.animate({
            translate: { x: 0, y: -210 },
            opacity: 1,
            duration: 280,
            delay: 0,
          })
        );

      const labelc = <View>this.labelc.nativeElement;
      labelc
        .animate({
          translate: { x: 0, y: -80 },
          opacity: 1,
          duration: 280,
          delay: 0,
        })
        .then(() =>
          labelc.animate({
            translate: { x: 0, y: -210 },
            opacity: 1,
            duration: 280,
            delay: 0,
          })
        );
      // btnb.animate({ translate: { x: 0, y: -65 }, opacity: 1, duration: 280, delay: 140 });
      this._isFabOpen = true;
    }
  }

  displayOptions2() {
    if (this._isFabOpen === true) {
      let animations = [
        {
          target: <View>this.fab.nativeElement,
          rotate: 0,
          duration: 280,
          delay: 0,
        },
        {
          target: <View>this.btna.nativeElement,
          translate: { x: 0, y: 0 },
          opacity: 0,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: 0,
        },
        {
          target: <View>this.labela.nativeElement,
          translate: { x: 0, y: 0 },
          opacity: 0,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: 0,
        },
        {
          target: <View>this.btnb.nativeElement,
          translate: { x: 0, y: 0 },
          opacity: 0,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: 0,
        },
        {
          target: <View>this.labelb.nativeElement,
          translate: { x: 0, y: 0 },
          opacity: 0,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: 0,
        },
        {
          target: <View>this.btnc.nativeElement,
          translate: { x: 0, y: 0 },
          opacity: 0,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: 0,
        },
        {
          target: <View>this.labelc.nativeElement,
          translate: { x: 0, y: 0 },
          opacity: 0,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: 0,
        },
        // { target: <View>this.btnd.nativeElement, translate: { x: 0, y: 0 }, opacity: 0, duration: 280, curve: CoreTypes.AnimationCurve.easeOut, delay: 0 },
        // { target: <View>this.btne.nativeElement, translate: { x: 0, y: 0 }, opacity: 0, duration: 280, curve: CoreTypes.AnimationCurve.easeOut, delay: 0 }
      ];

      const a = new Animation(animations);
      a.play()
        .then(() => {
          this._isFabOpen = false;
        })
        .catch(function (e) {
          console.log(e.message);
        });
    } else {
      const appearDelay = 70;
      let animations = [
        {
          target: <View>this.fab.nativeElement,
          rotate: 45 + 90,
          duration: 280,
          delay: 0,
        },
        {
          target: <View>this.btna.nativeElement,
          translate: { x: 0, y: -80 },
          opacity: 1,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: appearDelay,
        },
        {
          target: <View>this.labela.nativeElement,
          translate: { x: 0, y: -80 },
          opacity: 1,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: appearDelay,
        },
        {
          target: <View>this.btnb.nativeElement,
          translate: { x: 0, y: -145 },
          opacity: 1,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: appearDelay,
        },
        {
          target: <View>this.labelb.nativeElement,
          translate: { x: 0, y: -145 },
          opacity: 1,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: appearDelay,
        },
        {
          target: <View>this.btnc.nativeElement,
          translate: { x: 0, y: -210 },
          opacity: 1,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: appearDelay,
        },
        {
          target: <View>this.labelc.nativeElement,
          translate: { x: 0, y: -210 },
          opacity: 1,
          duration: 280,
          curve: CoreTypes.AnimationCurve.easeOut,
          delay: appearDelay,
        },
        // { target: <View>this.btnd.nativeElement, translate: { x: 75, y: -80 }, opacity: 1, duration: 280, curve: CoreTypes.AnimationCurve.easeOut, delay: 0 },
        // { target: <View>this.btne.nativeElement, translate: { x: 90, y: -15 }, opacity: 1, duration: 280, curve: CoreTypes.AnimationCurve.easeOut, delay: 0 }
      ];

      let a = new Animation(animations);

      a.play()
        .then(() => {
          this._isFabOpen = true;
        })
        .catch(function (e) {
          console.log(e.message);
        });
    }
  }
}
