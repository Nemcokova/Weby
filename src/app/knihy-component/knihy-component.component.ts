import { Component} from '@angular/core';

@Component({
  selector: 'app-knihy-component',
  templateUrl: './knihy-component.component.html',
  styleUrls: ['./knihy-component.component.css']
})
export class KnihyComponentComponent {

  knihy:any = [];
  kniha = {id: " ", meno:" ", autor:" ", dostupnost:" "};

  public pridajKnihu(): void{
    this.knihy.push({id: this.kniha.id, meno: this.kniha.meno, autor: this.kniha.autor, dostupnost:this.kniha.dostupnost});
  }

}
