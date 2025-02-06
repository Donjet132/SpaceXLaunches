import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AuthService } from './core/auth/auth.service';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SpaceXLaunches';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
}
