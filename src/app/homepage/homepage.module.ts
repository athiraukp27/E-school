import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { AddHomeComponent } from './add-home/add-home.component';
import { UpdateHomeComponent } from './update-home/update-home.component';
import { DeleteHomeComponent } from './delete-home/delete-home.component';
import { ViewAllHomeComponent } from './view-all-home/view-all-home.component';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    HomepageComponent,
    AddHomeComponent,
    UpdateHomeComponent,
    DeleteHomeComponent,
    ViewAllHomeComponent,
    ViewHomeComponent,
    RegisterComponent
    
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomepageModule { }
