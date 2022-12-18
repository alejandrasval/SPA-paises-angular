import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject()

  termino: string = ""

  constructor() { }

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe(valor => console.log(valor))
  }

  buscar() {
    this.onEnter.emit(this.termino)
  }

  keydown() {
    this.debouncer.next(this.termino)
  }
}
