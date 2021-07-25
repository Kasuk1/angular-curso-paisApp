import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{
  @Input() placeHolderProperty: string = "";

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  public debouncer: Subject<string>= new Subject();

  public termino: string = "";

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  buscar() {
    this.onEnter.emit(this.termino);  
  }

  teclaPresionada(event: any) {
    this.debouncer.next(this.termino);
  }

}
