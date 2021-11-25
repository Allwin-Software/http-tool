import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-authentication',
  templateUrl: './basic-authentication.component.html',
  styleUrls: ['./basic-authentication.component.scss'],
})
export class BasicAuthenticationComponent implements OnInit {
  @Output() authUpdated = new EventEmitter();
  authForm = this.formBuilder.group({
    userName: [''],
    password: [''],
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.authForm.valueChanges.subscribe((formValue) => {
      const basicString = `${formValue.userName}:${formValue.password}`;
      const base64String = btoa(basicString);
      this.authUpdated.emit(base64String);
    });
  }

  saveBasicAuth() {
    const formValue = this.authForm.value;
  }
}
