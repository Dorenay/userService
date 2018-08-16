import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component'
import { UserService } from './user-card/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
