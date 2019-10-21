import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppListComponent } from './app-list/app-list.component';
import { AppListItemComponent } from './app-list-item/app-list-item.component';
import { ListConfigComponent } from './list-config/list-config.component';
import { AppListDetailsComponent } from './app-list-details/app-list-details.component';


@NgModule({
  declarations: [
    AppComponent,
    AppListComponent,
    AppListItemComponent,
    ListConfigComponent,
    AppListDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
