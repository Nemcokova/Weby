import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { KnihyComponentComponent } from './knihy-component/knihy-component.component';
import { PrvastrankaComponent } from './prvastranka/prvastranka.component';
import {RouterModule} from "@angular/router";
import { OsobyComponent } from './osoby/osoby.component';

@NgModule({
  declarations: [
    AppComponent,
    KnihyComponentComponent,
    PrvastrankaComponent,
    OsobyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
