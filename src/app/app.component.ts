import { Component } from '@angular/core';

enum MENU {OSOBY, KNIHY,VYPOZICKY}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "stranka";
  menu = MENU;
  aktualne: MENU = MENU.OSOBY;

  otvorMenu(m: MENU){
    this.aktualne = m;
  }



  vypozicky:any = [];
  vypozicka = {id:" ", kniha:" ", osoba:" "};


  public pridajVypozicku(): void{
    this.vypozicky.push({id: this.vypozicka.id, kniha: this.vypozicka.kniha, osoba: this.vypozicka.osoba});
  }
}
