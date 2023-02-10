import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { RestService } from './services/rest.service';

@Injectable({
   providedIn: 'root'
})
export class AuthService {

   isUserLoggedIn: boolean = false;

   login(email: string, password: string) {
      console.log(email);
      console.log(password);
      // return this.restService.get('login').subscribe((data) => {
      //    console.log(data);
      //    this.isUserLoggedIn = userName == 'admin' && password == 'admin';
      //    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
      //  });
      return this.restService.post('login',{email, password}).pipe(
         tap((response: any) => {
            localStorage.setItem('isUserLoggedIn', response ? "true" : "false"); 
          }),
      );
   }

   logout(): void {
   this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }

   constructor(private restService: RestService) { }
}