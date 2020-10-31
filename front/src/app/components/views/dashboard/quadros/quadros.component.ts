import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quadros',
  templateUrl: './quadros.component.html',
  styleUrls: ['./quadros.component.scss'],
})
export class QuadrosComponent implements OnInit {
  @Input() titulo: string;
  @Input() valor: number;
  @Input() styles: any;
  @Input() icon: string;
  @Input() bigIcon: string;
  @Input() bigIconColor: string;
  @Input() IconImg: string;
  constructor() {}

  ngOnInit(): void {
    console.log(this.bigIcon, this.bigIconColor);
    console.log(this.IconImg);
  }
}
