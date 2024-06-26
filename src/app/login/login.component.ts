import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalServiceService } from '../../service/local-service.service';
import { ILogin, Login } from '../../model/login.model';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ConnectorService } from '../../service/connector.service';
import { AlertService } from '../../service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  login!: ILogin;
  constructor (private localService : LocalServiceService,
    private loginService : LoginService,
    private router: Router,
    private connectorService : ConnectorService,
    private alertService : AlertService
  ){  }

  ngOnInit(): void {
    this.login = new Login();
  }

  singIn(): void{
    this.loginService.singIn(this.login).subscribe(
      token=> {
        if(token.statusCode == 200)
        {
          this.localService.saveData("token",token.data);
          this.connectorService.singIn(true)
          this.router.navigate(['/productos']);
        }
        else{
          this.connectorService.singIn(false)
          this.alertService.showAlertDanger("Datos incorrectos")
        }
      }
    );
  }
}
