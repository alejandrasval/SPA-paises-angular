import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "Hola mundo"
  error: boolean = false
  paises: Country[] = []

  constructor(private paisService: PaisService) {

  }

  buscar(termino: string) {
    this.termino = termino;
    this.error = false;
    this.paisService.buscarPais(this.termino).subscribe(paises => { this.paises = paises }, err => {
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

