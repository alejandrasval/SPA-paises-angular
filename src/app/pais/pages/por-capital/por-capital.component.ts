import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = "Hola mundo"
  error: boolean = false
  paises: Country[] = []

  constructor(private paisService: PaisService) {

  }

  buscar(termino: string) {
    this.termino = termino;
    this.error = false;
    console.log(this.termino)
    this.paisService.buscarCapital(this.termino).subscribe(paises => { this.paises = paises }, err => {
      debugger
      this.error = true;
      console.log(err)
      this.paises = [];
    });
  }

  sugerencias(termino: string) {
    this.error = false;
  }
}

