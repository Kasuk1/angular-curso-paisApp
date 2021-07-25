import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  public termino: string = "";
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPaisPorCapital(this.termino)
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      } );
  }

}
