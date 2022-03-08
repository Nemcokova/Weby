import { Component } from '@angular/core';

enum MENU {OSOBY, KNIHY,VYPOZICKY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menu = MENU;
  aktualne: MENU = MENU.OSOBY;

  otvorMenu(m: MENU){
    this.aktualne = m;
  }

  osoby:any = [];
  osoba = {id: "id", meno:"meno", kontakt:"kontakt"};

  vypozicky:any = [];
  vypozicka = {id:" ", kniha:" ", osoba:" "};

    public pridajOsobu(): void{
    this.osoby.push({id: this.osoba.id, meno: this.osoba.meno, kontakt: this.osoba.kontakt});
  }

  public pridajVypozicku(): void{
    this.vypozicky.push({id: this.vypozicka.id, kniha: this.vypozicka.kniha, osoba: this.vypozicka.osoba});
  }
}
