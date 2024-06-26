import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LocalServiceService } from '../../service/local-service.service';
import { ILogin, Login } from '../../model/login.model';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  login!: ILogin;
  private isLogin: boolean = false;

  loginSubject : Subject<any> = new Subject<any>();
  loginStream : Observable<any> = this.loginSubject.asObservable();
  
  constructor (private localService : LocalServiceService,
    private loginService : LoginService,
    private router: Router
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
          this.loginSubject.next(true)
          this.router.navigate(['/productos']);
        }
      }
    );
  }
}
