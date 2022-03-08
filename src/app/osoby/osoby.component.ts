import { Component} from '@angular/core';

@Component({
  selector: 'app-osoby',
  templateUrl: './osoby.component.html',
  styleUrls: ['./osoby.component.css']
})
export class OsobyComponent {

  osoby:any = [];
  osoba = {id: "id", meno:"meno", kontakt:"kontakt"};

  public pridajOsobu(): void{
    this.osoby.push({id: this.osoba.id, meno: this.osoba.meno, kontakt: this.osoba.kontakt});
  }

}
