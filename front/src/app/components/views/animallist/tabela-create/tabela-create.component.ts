import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabela-create',
  templateUrl: './tabela-create.component.html',
  styleUrls: ['./tabela-create.component.scss']
})
export class TabelaCreateComponent implements OnInit {
  nome;
  grupoAnimal;
  local;
  criar;
  
  constructor() { }

  ngOnInit(): void {
    criarAnimal() {
      console.log(this.nome, this.grupoAnimal, this.local);
      this.criar = this.tabelaReadService
        .create({
          nome: this.nome,
          especie: this.grupoAnimal,
          local: this.local,
        })
        .subscribe(() => {
          this.router.navigate(['/listaCliente']);
        });
    }
  
    cancel(): void {
      this.router.navigate(['/listaCliente']);
    }
  }
  }

}
