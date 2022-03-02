import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { HighlightsDirective } from '../directives/highlights.directive';
import { CountryCodesPipe } from '../pipe/country-codes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProfileComponent,
    HighlightsDirective,
    CountryCodesPipe,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
