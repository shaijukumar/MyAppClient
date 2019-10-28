import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppListComponent } from './app-list/app-list.component';
import { AppListItemComponent } from './app-list-item/app-list-item.component';
import { ListConfigComponent } from './list-config/list-config.component';
import { AppListDetailsComponent } from './app-list-details/app-list-details.component';
import { AppFieldComponent } from './app-field/app-field.component';

const routes: Routes = [  { path: '', component: AppListComponent },
                          { path: 'NewList', component: AppListItemComponent },
                          { path: 'ListConfig/:id', component: ListConfigComponent },                          
                          { path: 'Lists/:id', component: AppListDetailsComponent },                          
                          { path: 'CreateField/:listId', component: AppFieldComponent },
                          { path: 'EditField/:id', component: AppFieldComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
