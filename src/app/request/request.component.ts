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
  constructor() {}

  ngOnInit(): void {}
}
