import { Component, OnInit } from '@angular/core';
import { LocalServiceService } from '../../service/local-service.service';
import { LoginComponent } from '../login/login.component';
import { ConnectorService } from '../../service/connector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit  {

  singIn : boolean = false;
  constructor(private localService : LocalServiceService,
    private connectorService : ConnectorService,
    private router: Router,
  ){}

  ngOnInit() {
    this.validateLogin();
  }

  validateLogin(){
    this.connectorService
      .fooStream
      .subscribe(
        value => {
          this.singIn = value;
      });
  }

  logout(){
    this.localService.removeData("token")
    this.connectorService.singIn(false);
    this.router.navigate(['/productos']);
  }
}
