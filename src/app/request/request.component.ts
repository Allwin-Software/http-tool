import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  methods = [
    {
      id: 'post',
      text: 'Post',
    },
    {
      id: 'get',
      text: 'Get',
    },
  ];
  headers: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  onAuthUpdated(authType: string, data: any) {
    const header = { key: 'Authorization', value: `${authType} ${data}` };
    this.headers.push(header);
  }
}
