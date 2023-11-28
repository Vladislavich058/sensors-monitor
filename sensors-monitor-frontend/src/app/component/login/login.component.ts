import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login } from 'src/app/Store/User/User.Action';
import { UserCred } from './../../Store/Model/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private store: Store) {}
  ngOnInit(): void {
    localStorage.clear();
  }

  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  });

  login() {
    if (this.loginForm.valid) {
      const _obj: UserCred = {
        username: this.loginForm.value.username as string,
        password: this.loginForm.value.password as string,
      };
      this.store.dispatch(login({ userCred: _obj }));
    }
  }
}
