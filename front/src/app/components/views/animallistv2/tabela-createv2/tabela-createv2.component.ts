import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animallistv2Service } from '../animallistv2.service';

@Component({
  selector: 'app-tabela-createv2',
  templateUrl: './tabela-createv2.component.html',
  styleUrls: ['./tabela-createv2.component.scss'],
})
export class TabelaCreatev2Component implements OnInit {
  constructor(private animalv2: Animallistv2Service, private router: Router) {}

  ngOnInit(): void {}

  create() {
    this.animalv2.create().subscribe(() => {
      this.animalv2.showMessage('Animal Cadastrado!');
      this.router.navigate(['/animallist']);
    });
  }

  cancel() {
    this.router.navigate(['/animallist']);
  }
}
