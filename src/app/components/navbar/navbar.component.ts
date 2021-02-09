import { Component, Inject } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})

export class NavbarComponent {

  constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService) { 
  
  }

}
