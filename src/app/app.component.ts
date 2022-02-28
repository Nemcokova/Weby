import { Component } from '@angular/core';

enum MENU {OSOBY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = MENU;
  aktualne: MENU = MENU.OSOBY;
  //MENU menu = new MENU();

  zobrazOsoby = false;

  otvorMenu(m: MENU){
    this.aktualne = m;
  }

  osoby:any = [];
  osoba = {id: "id", meno:"meno", kontakt:"kontakt"};

  public pridajOsobu(): void{
    this.osoby.push({id: this.osoba.id, meno: this.osoba.meno, kontakt: this.osoba.kontakt});
  }

}
