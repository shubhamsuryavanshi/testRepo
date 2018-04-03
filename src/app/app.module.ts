import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'angular4-datepicker/src/my-date-picker';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserItemComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,MyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
