import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-request-group',
  templateUrl: './request-group.component.html',
  styleUrls: ['./request-group.component.scss'],
})
export class RequestGroupComponent implements OnInit {
  selectedTab = new FormControl(0);
  tabs = [
    {
      label: 'New tab',
      closeEnabled: true,
    },
    {
      label: 'New tab1',
      closeEnabled: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  tabChange(event: MatTabChangeEvent) {
    if (event.tab.textLabel === 'new') {
      this.addNewTab();
    }
  }

  addNewTab() {
    const tab = {
      label: 'New tab',
      closeEnabled: true,
    };
    this.tabs.push(tab);
    this.selectedTab.setValue(this.tabs.length - 1);
  }
}
