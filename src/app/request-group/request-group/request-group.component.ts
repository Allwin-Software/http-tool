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
      request: null,
      toolTip: 'New tab',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  tabChange(event: MatTabChangeEvent) {
    if (event.tab.textLabel === 'new') {
      this.addNewTab();
    } else {
      this.selectedTab.setValue(event.index);
    }
  }

  addNewTab() {
    const tab = {
      label: 'New tab',
      closeEnabled: true,
      request: null,
      toolTip: 'New tab',
    };
    this.tabs.push(tab);
    setTimeout(() => {
      this.selectedTab.setValue(this.tabs.length - 1);
    }, 0);
  }

  closeTab(tab: any, index: number) {
    const isLastTab = this.tabs.length - 1 === index;
    this.tabs.splice(index, 1);
    if (isLastTab) {
      setTimeout(() => {
        this.selectedTab.setValue(this.tabs.length - 1);
      }, 0);
    }
  }

  requestUpdated(request: any, tab: any, index: number) {
    this.tabs[index].request = request;
    this.tabs[index].label = `${request.url}`.substring(0, 15);
    this.tabs[index].toolTip = `${request.url}`;
  }
}
