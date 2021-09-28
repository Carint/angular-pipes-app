import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  // i18nSelect
  nombre: string = 'Ruth';
  genero: string = 'femenino';
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural
  clientes: string[] = [
    'Ruth', 'Juan', 'Pedro',
    'Andrea'
  ]
  clientesMapas = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos # cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  constructor(
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  cambiarCliente() {
    this.nombre === 'Ruth' ? this.nombre = 'Ruben' : this.nombre = 'Ruth';
    this.genero === 'femenino' ? this.genero = 'masculino' : this.genero = 'femenino';
  }

  borrarCliente() {
    if(this.clientes.length > 0)
      this.clientes.pop();
  }

}
