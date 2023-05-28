import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  constructor(
    public authService: AuthService
  )
  {}

  ngOnInit() {
    console.log(this.authService.userData.userInfo.role);
  }
}
