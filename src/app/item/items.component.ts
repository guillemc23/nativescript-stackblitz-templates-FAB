import { Component, OnInit } from '@angular/core';
import { Fab } from '@nstudio/nativescript-floatingactionbutton';
import { registerElement } from '@nativescript/angular';
registerElement(
    'Fab',
    () => require('@nstudio/nativescript-floatingactionbutton').Fab
);

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }
}
