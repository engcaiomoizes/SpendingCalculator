import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = "Login";

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  submit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.login(email!, password!).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => {
          switch (err.code) {
            case 'auth/invalid-credential':
              this.errorMessage = 'E-mail e/ou senha incorretos.';
              break;
            default:
              this.errorMessage = 'Ocorreu um erro. Tente novamente.';
              break;
          }
        }
      });
    }
  }
}
