import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dados;
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dados = this.dashboardService.read();
  }
}
