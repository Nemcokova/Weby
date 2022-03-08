import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PrvastrankaComponent} from "../prvastranka/prvastranka.component";

const router: Routes =[
  {
    path: "osobyknihyvypozicky",
    component: PrvastrankaComponent
  }
]



@NgModule({
  imports: [
    RouterModule.forRoot(router),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
