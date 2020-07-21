import { TodoComponent } from './todo/todo.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'users/:id', component: UserDetailsComponent },
  { path: 'todos', component: TodoComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }