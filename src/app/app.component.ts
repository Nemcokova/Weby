import { Component } from '@angular/core';

enum MENU {OSOBY, KNIHY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = MENU;
  aktualne: MENU = MENU.OSOBY;

  zobrazOsoby = false;

  otvorMenu(m: MENU){
    this.aktualne = m;
  }

  osoby:any = [];
  osoba = {id: "id", meno:"meno", kontakt:"kontakt"};

  knihy:any = [];
  kniha = {id: " ", meno:" ", autor:" ", dostupnost:" "};

  public pridajOsobu(): void{
    this.osoby.push({id: this.osoba.id, meno: this.osoba.meno, kontakt: this.osoba.kontakt});
  }

  public pridajKnihu(): void{
    this.knihy.push({id: this.kniha.id, meno: this.kniha.meno, autor: this.kniha.autor, dostupnost:this.kniha.dostupnost});
  }

}
