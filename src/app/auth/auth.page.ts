import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: false
})
export class AuthPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    this.authService.login();
    this.router.navigate(['/places']);  // Redirect to places after login
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);  // Redirect to auth page after logout
  }
}
