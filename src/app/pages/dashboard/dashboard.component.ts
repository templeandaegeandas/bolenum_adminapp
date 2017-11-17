import { Component , OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})

export class Dashboard implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {

  }
}
