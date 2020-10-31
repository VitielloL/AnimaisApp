import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}
  dados = {
    gatos: {
      nome: 'Total de Gatos',
      valor: 531,
    },
    ave: {
      nome: 'Total de Aves',
      valor: 207,
    },

    cao: {
      nome: 'Total de Dogs',
      valor: 352,
    },
    peixe: {
      nome: 'Total de Peixes',
      valor: 155,
    },
    mico: {
      nome: 'Total de Micos',
      valor: 58,
    },
  };

  read() {
    return this.dados;
  }
}
