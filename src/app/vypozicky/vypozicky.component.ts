import { Component } from '@angular/core';

@Component({
  selector: 'app-vypozicky',
  templateUrl: './vypozicky.component.html',
  styleUrls: ['./vypozicky.component.css']
})
export class VypozickyComponent{

  vypozicky:any = [];
  vypozicka = {id:" ", kniha:" ", osoba:" "};


  public pridajVypozicku(): void{
    this.vypozicky.push({id: this.vypozicka.id, kniha: this.vypozicka.kniha, osoba: this.vypozicka.osoba});
  }

}
