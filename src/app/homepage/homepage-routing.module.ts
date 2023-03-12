import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHomeComponent } from './add-home/add-home.component';
import { DeleteHomeComponent } from './delete-home/delete-home.component';
import { HomepageComponent } from './homepage.component';
import { RegisterComponent } from './register/register.component';
import { UpdateHomeComponent } from './update-home/update-home.component';
import{ViewAllHomeComponent} from './view-all-home/view-all-home.component';
import{ViewHomeComponent} from './view-home/view-home.component';

const routes: Routes = [
  { path: '', component: ViewAllHomeComponent },
  { path: 'add-home', component: AddHomeComponent },
  { path: 'delete-home', component: DeleteHomeComponent },
  { path: 'update-home', component: UpdateHomeComponent },
  { path: 'view-home', component: ViewHomeComponent },
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
