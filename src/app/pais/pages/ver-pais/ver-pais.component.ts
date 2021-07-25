import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  public pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorId(id) ),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais);

    /* this.activatedRoute.params
      .subscribe(({id}) => {
        console.log(id)

        this.paisService.getPaisPorId(id)
          .subscribe(pais => {
            console.log(pais)
          });

      }); */


  }
}
