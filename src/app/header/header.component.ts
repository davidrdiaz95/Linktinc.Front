import { Component, OnInit } from '@angular/core';
import { LocalServiceService } from '../../service/local-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit  {

  singIn : boolean = false;
  constructor(private localService : LocalServiceService,
    // private loginComponent : LoginComponent
  ){}

  ngOnInit() {
    
  }
}
