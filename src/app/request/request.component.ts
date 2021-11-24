import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss'],
})
export class RequestComponent implements OnInit {
  methods = [
    {
      id: 'get',
      text: 'Get',
    },
    {
      id: 'post',
      text: 'Post',
    },
  ];
  headers: any[] = [];
  requestForm = this.formBuilder.group({
    method: [this.methods[0]],
    url: [''],
  });

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onAuthUpdated(authType: string, data: any) {
    const header = { key: 'Authorization', value: `${authType} ${data}` };
    this.headers.push(header);
  }

  send() {
    const formValue = this.requestForm.value;
    const method = formValue.method;
    let request = null;
    switch (method.id) {
      case 'get': {
        request = this.httpGet(formValue);
        break;
      }
    }

    request?.subscribe((result) => {
      console.log(result);
    });
  }

  httpGet(formValue: any) {
    const httpHeaders = this.headers.reduce((coll, header) => {
      coll[header.key] = header.value;
      return coll;
    }, {});
    return this.httpClient.get(formValue.url, { headers: new HttpHeaders(httpHeaders) });
  }
}
