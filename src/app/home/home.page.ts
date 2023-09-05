import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserModel } from '../models/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  homeInfoReceived: UserModel | undefined;

  constructor(private r: Router) {
    this.homeInfoReceived = this.r.getCurrentNavigation()?.extras.state?.['user'];
   }

  ngOnInit() {
  }

}
