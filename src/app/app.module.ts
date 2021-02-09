import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricesComponent } from './components/prices/prices.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtectedComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'course-angular.us.auth0.com',
      clientId: 'iyaNi2AT4xqFGFp1kcyGEvBmawpOh9Rf'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
